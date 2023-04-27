import { listIndexed } from '../common/techs';
import { Payload } from '../payload';
import type { ComponentType } from '../types';

export interface TechAnalyserOptions {
  provider: any;
}
export function findImplicitComponent(pl: Payload) {
  pl.techs.forEach((tech) => {
    if (!(tech in listIndexed)) {
      return;
    }

    const ref = listIndexed[tech];
    if (ref.type === 'ci' || ref.type === 'language' || ref.type === 'tool') {
      return;
    }

    let type: ComponentType = 'component';
    if (ref.type === 'hosting') type = 'hosting';
    else if (ref.type === 'sass') type = 'thirdparty';

    pl.addComponent(
      new Payload({
        name: tech,
        tech: tech,
        folderPath: '',
        type,
      })
    );
  });
}

export function findLinks(pl: Payload) {
  pl.components.forEach((component) => {
    component.techs.forEach((tech) => {
      if (!(tech in listIndexed)) {
        return;
      }
      const ref = listIndexed[tech];

      if (ref.type === 'hosting') {
        const find = pl.components.find((c) => c.tech === ref.key);
        if (!find) {
          throw new Error(`cant find hosting ${ref.key}`);
        }
        component.inComponent = find.id;

        return;
      }

      if (
        ref.type === 'sass' ||
        ref.type === 'app' ||
        ref.type === 'db' ||
        ref.type === 'messaging'
      ) {
        const find = pl.components.find((c) => c.tech === ref.key);
        if (!find) {
          throw new Error(`cant find sass ${ref.key}`);
        }
        component.addEdges(find.id);

        return;
      }
    });
  });
}

export async function techAnalyser(
  opts: TechAnalyserOptions
): Promise<Payload> {
  const provider = opts.provider;
  const pl = new Payload({ name: 'main', folderPath: '/', type: 'project' });

  await pl.recurse(provider, '/');

  findImplicitComponent(pl);
  findLinks(pl);

  return pl;
}
