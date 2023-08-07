import { describe, expect, it, vi } from 'vitest';

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

    expect(root.childs[0].name).toEqual('GCP manual');
    expect(root.childs[0].id).toEqual('4');
    expect(root.childs[1].name).toEqual('PubSub');
    expect(root.childs[1].id).toEqual('5');
    expect(root.childs[1].inComponent!.id).toEqual('4');
  });
});
