import { describe, expect, it, vi } from 'vitest';

import { Payload } from './index.js';

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
});
