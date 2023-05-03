import { describe, expect, it } from 'vitest';

import { findEdgesInDependencies, flatten } from './helpers';

import { Payload } from '.';

describe('findEdgesInDependencies', () => {
  it('should find an edge', () => {
    const main = new Payload({ id: '1', name: 'main', folderPath: '' });
    main.childs.push(new Payload({ id: '2', name: '2', folderPath: '/' }));
    main.childs.push(
      new Payload({
        id: '3',
        name: '3',
        folderPath: '/',
        dependencies: [['npm', '2', '0.0.0']],
      })
    );

    findEdgesInDependencies(main);

    expect(main).toMatchSnapshot();
  });
});

describe('flatten', () => {
  it('should flatten', () => {
    const main = new Payload({ id: '1', name: 'main', folderPath: '' });
    const sub = new Payload({
      id: '2',
      name: '2',
      folderPath: '/',
      dependencies: [['npm', 'aa', '0.0.0']],
    });
    sub.childs.push(
      new Payload({
        id: '3',
        name: '3',
        folderPath: '/',
        dependencies: [['npm', 'bb', '0.0.0']],
      })
    );
    main.childs.push(sub);

    const flat = flatten(main);
    expect(flat.id).not.toBe(main.id);
    flat.id = 'new';

    expect(flat.toJson()).toMatchSnapshot();
  });
});
