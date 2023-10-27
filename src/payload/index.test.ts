import { describe, expect, it, vi } from 'vitest';

import { matchAllFiles } from '../matchAllFiles.js';

import { Payload } from './index.js';

import '../autoload.js';

let id = 0;
vi.mock('../common/nid.ts', () => {
  return { nid: () => `${id++}` };
});

describe('Payload', () => {
  it('should detect nested dependencies', () => {
    const root = new Payload({ name: 'root', folderPath: '/' });
    root.addChild(
      new Payload({ name: 'PubSub', folderPath: '/', tech: 'gcp.pubsub' })
    );

    expect(root.toJson()).toMatchSnapshot();
  });

  it('should reuse correctly nested dependency', () => {
    const root = new Payload({ name: 'root', folderPath: '/' });
    root.addChild(
      new Payload({ name: 'GCP manual', folderPath: '', tech: 'gcp' })
    );
    root.addChild(
      new Payload({ name: 'PubSub', folderPath: '/', tech: 'gcp.pubsub' })
    );

    expect(root.childs[0].name).toBe('GCP manual');
    expect(root.childs[0].id).toBe('4');
    expect(root.childs[1].name).toBe('PubSub');
    expect(root.childs[1].id).toBe('5');
    expect(root.childs[1].inComponent!.id).toBe('4');
  });

  it('should dedup child and path', () => {
    const root = new Payload({ name: 'root', folderPath: '/' });
    root.addChild(
      new Payload({ name: 'GCP1', folderPath: 'foo', tech: 'gcp' })
    );
    root.addChild(
      new Payload({ name: 'GCP2', folderPath: 'foo', tech: 'gcp' })
    );
    root.addChild(
      new Payload({ name: 'GCP3', folderPath: 'bar.xml', tech: 'gcp' })
    );

    expect(root.childs).toHaveLength(1);
    expect(root.childs[0].path).toStrictEqual(new Set(['foo', 'bar.xml']));
    expect(root.toJson().childs[0].path).toStrictEqual(['foo', 'bar.xml']);
  });

  it('should dedup matched tech', () => {
    const root = new Payload({ name: 'root', folderPath: '/' });
    const res = matchAllFiles(
      [
        { name: 'index.ts', fp: 'index.ts', type: 'file' },
        { name: 'script.ts', fp: 'scripts.ts', type: 'file' },
      ],
      '/'
    );
    root.addTechs(res);

    expect(root.techs).toStrictEqual(new Set(['typescript']));
    expect(root.reason).toStrictEqual(new Set(['matched extension: .ts']));
  });
});
