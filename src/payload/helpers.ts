import { listIndexed } from '../common/techs';
import type { AllowedKeys } from '../types/techs';

import { Payload } from '.';

/**
 * When receive a tech in a component, we can deduct a new Component that was missing
 * For example we receive:
 *  - "pg" from a package.json
 *  - we deduct there is a Postgresql
 *  - Create an eponymous component
 *
 * Obviously there could be some false positive.
 */
export function findImplicitComponent(pl: Payload, tech: AllowedKeys) {
  const ref = listIndexed[tech];
  if (ref.type === 'ci' || ref.type === 'language' || ref.type === 'tool') {
    return;
  }

  const comp = new Payload({
    name: tech,
    tech: tech,
    folderPath: pl.path[0],
    parent: pl,
  });
  pl.addComponent(comp);
  if (comp.group !== 'hosting') {
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
  if (ref.type !== 'hosting') {
    return;
  }

  const find = pl.childs.find((c) => c.tech === ref.key);
  if (!find) {
    throw new Error(`cant find hosting ${ref.key}`);
  }

  pl.inComponent = find;
}

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
      const already = child.edges.find((edge) => edge.to.name === name);
      if (already) {
        return;
      }

      child.addEdges(pl.childs.find((c) => c.name === name)!);
    });
  });
}

// TODO: is it still necessary?
export function findEdges(pl: Payload) {
  pl.childs.forEach((component) => {
    component.techs.forEach((tech) => {
      const ref = listIndexed[tech];

      if (
        ref.type === 'sass' ||
        ref.type === 'app' ||
        ref.type === 'db' ||
        ref.type === 'messaging'
      ) {
        const find = pl.childs.find((c) => c.tech === ref.key);
        if (!find) {
          throw new Error(`cant find sass ${ref.key}`);
        }
        component.addEdges(find);

        return;
      }
    });
  });
}

/**
 * Flatten takes a nested Payload and brings everything down to a single level.
 * It merges all fields that can be merged and deduplicate resources that are similar.
 */
export function flatten(src: Payload, dest?: Payload): Payload {
  const isRoot = !dest;
  if (!dest) {
    dest = new Payload({ name: 'flatten', folderPath: '/' });
  }

  src.childs.forEach((component) => flatten(component, dest));
  src.techs.forEach((tech) => dest!.techs.add(tech));
  dest.dependencies = [...dest.dependencies, ...src.dependencies];

  if (src.tech) {
    dest.techs.add(src.tech);
  }

  for (const [lang, count] of Object.entries(src.languages)) {
    dest.addLang(lang, count);
  }

  const cp = src.copy();
  cp.childs = [];
  dest.addComponent(cp);

  cp.setParent(null);

  // if (isRoot) {
  //   findEdgesInDependencies(dest);
  // }
  return dest;
}
