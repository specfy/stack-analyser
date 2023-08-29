import { describe, expect, it } from 'vitest';

import { findEdgesInDependencies, flatten } from './helpers.js';

import { Payload } from './index.js';

import '../autoload.js';

describe('findEdgesInDependencies', () => {
  it('should find an edge', () => {
    const main = new Payload({ id: '1', name: 'main', folderPath: '' });
    main.id;
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
  it('should flatten and merge dependencies', () => {
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

    const flat = flatten(main, { merge: true });
    expect(flat.id).not.toBe(main.id);
    flat.id = 'new';

    expect(flat.toJson('')).toMatchSnapshot();
  });

  it('should flatten and merge host', () => {
    const main = new Payload({ id: '1', name: 'main', folderPath: '' });

    // first component
    const host1 = new Payload({
      id: '4',
      name: '4',
      folderPath: '/',
      tech: 'vercel',
    });
    const sub1 = new Payload({
      id: '2',
      name: '2',
      folderPath: '/',
    });
    sub1.childs.push(host1);
    sub1.inComponent = host1;

    // second component
    const host2 = new Payload({
      id: '5',
      name: '5',
      folderPath: '/',
      tech: 'vercel',
    });
    const sub2 = new Payload({
      id: '6',
      name: '6',
      folderPath: '/',
    });
    sub2.childs.push(host2);
    sub2.inComponent = host2;

    // Push everything into main
    main.childs.push(sub1, sub2);

    const flat = flatten(main, { merge: true });
    flat.id = 'new';

    expect(flat.toJson('')).toMatchSnapshot();
    expect(flat.childs[1].inComponent!.id).toBe('4');
    expect(flat.childs[2].inComponent!.id).toBe('4');
  });

  it('should flatten but not merge', () => {
    const main = new Payload({ id: '1', name: 'main', folderPath: '' });

    // first component
    const host1 = new Payload({
      id: '4',
      name: '4',
      folderPath: '/',
      tech: 'vercel',
    });
    const sub1 = new Payload({
      id: '2',
      name: '2',
      folderPath: '/',
    });
    sub1.childs.push(host1);
    sub1.inComponent = host1;

    // second component
    const host2 = new Payload({
      id: '5',
      name: '5',
      folderPath: '/',
      tech: 'vercel',
    });
    const sub2 = new Payload({
      id: '6',
      name: '6',
      folderPath: '/',
    });
    sub2.childs.push(host2);
    sub2.inComponent = host2;

    // Push everything into main
    main.childs.push(sub1, sub2);

    const flat = flatten(main, { merge: false });
    flat.id = 'new';

    expect(flat.toJson('')).toMatchSnapshot();
    expect(flat.childs[1].inComponent!.id).toBe('4');
    expect(flat.childs[2].inComponent!.id).toBe('4');
  });
});
