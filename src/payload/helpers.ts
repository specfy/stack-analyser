import { listIndexed } from '../register.js';
import { Payload } from './index.js';

import type { AllowedKeys } from '../types/techs.js';

const notAComponent = new Set(['ci', 'language', 'tool', 'framework']);

/**
 * When receive a tech in a component, we can deduct a new Component that was missing
 * For example we receive:
 *  - "pg" from a package.json
 *  - we deduct there is a Postgresql
 *  - Create an eponymous component
 *
 * Obviously there could be some false positive.
 */
export function findImplicitComponent({
  pl,
  tech,
  reason,
}: {
  pl: Payload;
  tech: AllowedKeys;
  reason: string[];
}): void {
  const ref = listIndexed[tech];
  if (notAComponent.has(ref.type)) {
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
export function findHosting(pl: Payload, tech: AllowedKeys): void {
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
export function findEdgesInDependencies(pl: Payload): void {
  const names = new Set<string>();
  for (const child of pl.childs) names.add(child.name);

  for (const child of pl.childs) {
    for (const dep of child.dependencies) {
      const name = dep[1];
      if (!names.has(name)) {
        continue;
      }

      // Self referencing
      if (name === child.name || name === child.tech) {
        continue;
      }

      // Check if we already added an edge about that
      const already = child.edges.find((edge) => edge.target.name === name);
      if (already) {
        continue;
      }

      child.addEdges(pl.childs.find((c) => c.name === name)!);
    }
  }
}

function pushChilds(src: Payload, dest: Payload): void {
  for (const pl of src.childs) {
    const cp = pl.copy();
    pushChilds(cp, dest);
    cp.childs = [];
    dest.childs.push(cp);
  }
}

/**
 * flatten takes a nested Payload and brings everything down to a single level.
 * It deduplicates components that are strictly similar, and keep references in path.
 *
 * If merge = true, it merges all fields that can be merged down to the parent (e.g: dependencies).
 * Merging is only useful to get a summary of everything at the root level.
 */
export function flatten(src: Payload, options: { merge?: boolean } = {}): Payload {
  // Generate a flat list of childs
  const merge = options.merge || false;
  const dest = new Payload({ name: 'flatten', folderPath: '/' });
  pushChilds(src, dest);

  // Find and merge duplicates
  const duplicates: string[] = [];
  for (const childA of dest.childs) {
    if (duplicates.includes(childA.id)) {
      continue;
    }

    // Check against other child
    for (const childB of dest.childs) {
      if (childA.id === childB.id) {
        continue;
      }
      if (childA.tech === null || childB.tech === null) {
        continue;
      }
      if (childA.name !== childB.name && childA.tech !== childB.tech) {
        continue;
      }

      duplicates.push(childB.id);
      childA.combine(childB);

      // Update outdated ref
      for (const childC of dest.childs) {
        if (childC.inComponent?.id === childB.id) {
          childC.inComponent = childA;
        }
        if (childC.parent?.id === childB.id) {
          childC.inComponent = childA;
        }

        for (const edge of childC.edges) {
          if (edge.target.id === childB.id) {
            edge.target = childA;
          }
        }
      }
    }
  }

  // Remove duplicates
  dest.childs = dest.childs.filter((child) => {
    return !duplicates.includes(child.id);
  });

  findEdgesInDependencies(dest);

  // Combine everything with their respective parent
  if (merge === true) {
    for (const child of dest.childs) {
      if (child.parent) {
        child.parent.combine(child);
      }

      dest.combine(child);
    }

    dest.combine(src);
  }

  return dest;
}
