import { listIndexed } from '../register.js';
import type { AllowedKeys } from '../types/techs.js';

import { Payload } from './index.js';

const notAComponent = ['ci', 'language', 'tool', 'framework'];

/**
 * When receive a tech in a component, we can deduct a new Component that was missing
 * For example we receive:
 *  - "pg" from a package.json
 *  - we deduct there is a Postgresql
 *  - Create an eponymous component
 *
 * Obviously there could be some false positive.
 */
export function findImplicitComponent(
  pl: Payload,
  tech: AllowedKeys,
  reason: string[]
) {
  const ref = listIndexed[tech];
  if (notAComponent.includes(ref.type)) {
    return;
  }

  const comp = new Payload({
    name: ref.name,
    tech: tech,
    folderPath: pl.path,
    parent: pl,
    reason,
  });
  pl.addChild(comp);
  if (ref.type !== 'hosting' && ref.type !== 'cloud') {
    pl.addEdges(comp);
  }
}

/**
 * When receive a tech in a component, we can deduct a new Hosting that was missing
 * For example we receive:
 *  - "vercel" from a folder named .vercel
 *  - we deduct this component is hosted by Vercel
 *  - Create an eponymous component
 *
 * Obviously there could be some false positive.
 */
export function findHosting(pl: Payload, tech: AllowedKeys) {
  const ref = listIndexed[tech];
  if (ref.type !== 'hosting' && ref.type !== 'cloud') {
    return;
  }

  const find = pl.childs.find((c) => c.tech === ref.tech);
  if (!find) {
    throw new Error(`cant find hosting ${ref.tech}`);
  }

  pl.inComponent = find;
}

/**
 * Some edges can be found in the dependencies, i.e:
 * - in monorepo or in some language you can have many folders and import another folder.
 *
 * We try to find those import, using only the dependencies (not opening the code),
 * it can lead to some false positive with very generic names.
 */
export function findEdgesInDependencies(pl: Payload) {
  const names = new Set<string>();
  pl.childs.forEach((child) => names.add(child.name));

  pl.childs.forEach((child) => {
    child.dependencies.forEach((dep) => {
      const name = dep[1];
      if (!names.has(name)) {
        return;
      }

      // Self referencing
      if (name === child.name || name === child.tech) {
        return;
      }

      // Check if we already added an edge about that
      const already = child.edges.find((edge) => edge.target.name === name);
      if (already) {
        return;
      }

      child.addEdges(pl.childs.find((c) => c.name === name)!);
    });
  });
}

function pushChids(src: Payload, dest: Payload) {
  src.childs.forEach((pl) => {
    const cp = pl.copy();
    pushChids(cp, dest);
    cp.childs = [];
    dest.childs.push(cp);
  });
}

/**
 * flatten takes a nested Payload and brings everything down to a single level.
 * It deduplicates components that are strictly similar, and keep references in path.
 *
 * If merge = true, it merges all fields that can be merged down to the parent (e.g: dependencies).
 * Merging is only useful to get a summary of everything at the root level.
 */
export function flatten(
  src: Payload,
  { merge = false }: { merge: boolean } = { merge: false }
): Payload {
  // Generate a flat list of childs
  const dest = new Payload({ name: 'flatten', folderPath: '/' });
  pushChids(src, dest);

  // Find and merge duplicates
  const duplicates: string[] = [];
  dest.childs.forEach((childA) => {
    if (duplicates.includes(childA.id)) {
      return;
    }

    // Check against other child
    dest.childs.forEach((childB) => {
      if (childA.id === childB.id) {
        return;
      }
      if (childA.tech === null || childB.tech === null) {
        return;
      }
      if (childA.name !== childB.name && childA.tech !== childB.tech) {
        return;
      }

      duplicates.push(childB.id);
      childA.combine(childB);

      // Update outdated ref
      dest.childs.forEach((childC) => {
        if (childC.inComponent?.id === childB.id) {
          childC.inComponent = childA;
        }
        if (childC.parent?.id === childB.id) {
          childC.inComponent = childA;
        }

        childC.edges.forEach((edge) => {
          if (edge.target.id === childB.id) {
            edge.target = childA;
          }
        });
      });
    });
  });

  // Remove duplicates
  dest.childs = dest.childs.filter((child) => {
    return !duplicates.includes(child.id);
  });

  findEdgesInDependencies(dest);

  // Combine everything with their respective parent
  if (merge === true) {
    dest.childs.forEach((child) => {
      if (child.parent) {
        child.parent.combine(child);
      }

      dest.combine(child);
    });

    dest.combine(src);
  }

  return dest;
}
