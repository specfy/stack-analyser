import path from 'node:path';

import { describe, it, expect } from 'vitest';

import { flatten } from '../payload/helpers';
import { FakeProvider } from '../provider/fake';
import { FSProvider } from '../provider/fs';
import { cleanSnapshot } from '../tests/helpers';
import type { TechAnalyser } from '../types';

import { techAnalyser } from '.';

const dockerCompose = `version: '3'
services:
  db:
    container_name: db
    image: postgres:15.1-alpine
    ports:
      - '5432:5432'
    environment:
      - POSTGRES_PASSWORD=postgres
`;

describe('techAnalyser', () => {
  it('should not find anything', async () => {
    const res = await techAnalyser({
      provider: new FakeProvider({
        paths: {
          '/': [],
        },
        files: {},
      }),
    });

    expect(res.toJson()).toStrictEqual({
      id: expect.any(String),
      name: 'main',
      group: 'component',
      edges: [],
      inComponent: null,
      languages: {},
      path: ['/'],
      tech: null,
      techs: [],
      childs: [],
      dependencies: [],
    });
  });

  it('should register only component of the same tech', async () => {
    const res = await techAnalyser({
      provider: new FakeProvider({
        paths: {
          '/': ['package.json', 'docker-compose.yml'],
        },
        files: {
          '/docker-compose.yml': dockerCompose,
          '/package.json': '{ "name": "test", "dependencies": {"pg": "1.0.0"}}',
        },
      }),
    });

    const flat = flatten(res);
    const json: TechAnalyser = cleanSnapshot(
      JSON.parse(JSON.stringify(flat.toJson()))
    );

    expect(json).toMatchSnapshot();
    expect(flat.childs[0].id).toEqual(flat.childs[1].edges[0].to.id);
  });

  it('should run correctly', async () => {
    const res = await techAnalyser({
      provider: new FSProvider({
        path: path.join(__dirname, '../../tests/__fixtures__'),
      }),
    });

    expect(cleanSnapshot(res.toJson())).toMatchSnapshot();

    const flatted = flatten(res);
    expect(
      cleanSnapshot(JSON.parse(JSON.stringify(flatted.toJson())))
    ).toMatchSnapshot();
  });
});
