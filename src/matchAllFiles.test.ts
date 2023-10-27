import { describe, expect, it } from 'vitest';

import { matchAllFiles } from './matchAllFiles.js';

import './autoload.js';

describe('matchAllFiles', () => {
  it('should find nothing', () => {
    const res = matchAllFiles([], '/');
    expect(res).toStrictEqual(new Map());
  });

  it('should find extension based matching: typescript', () => {
    const res = matchAllFiles(
      [{ fp: '/index.tsx', name: 'index.tsx', type: 'file' }],
      '/'
    );

    const exp = new Map();
    exp.set('typescript', ['matched extension: .tsx']);
    exp.set('react', ['matched extension: .tsx']);
    expect(res).toStrictEqual(exp);
  });

  it('should find file based matching: nodejs', () => {
    const res = matchAllFiles(
      [{ fp: '/package.json', name: 'package.json', type: 'file' }],
      '/'
    );

    const exp = new Map();
    exp.set('nodejs', ['matched file: package.json']);
    expect(res).toStrictEqual(exp);
  });
});
