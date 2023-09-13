import path from 'node:path';

import { describe, it, expect, vi, beforeEach } from 'vitest';

import { flatten } from '../payload/helpers.js';
import { FakeProvider } from '../provider/fake.js';
import { FSProvider } from '../provider/fs.js';
import type { AnalyserJson } from '../types/index.js';

import { analyser } from './index.js';

import '../autoload.js';

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

let id = 0;
vi.mock('../common/nid.ts', () => {
  return { nid: () => `${id++}` };
});

describe('analyser', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should not find anything', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': [],
        },
        files: {},
      }),
    });

    expect(res.toJson('')).toStrictEqual({
      id: expect.any(String),
      name: 'main',
      edges: [],
      inComponent: null,
      languages: {},
      path: ['/'],
      tech: null,
      techs: [],
      childs: [],
      dependencies: [],
      reason: [],
    });
  });

  it('should register only component of the same tech', async () => {
    const res = await analyser({
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

    const flat = flatten(res, { merge: true });
    const json: AnalyserJson = JSON.parse(JSON.stringify(flat.toJson('')));
    expect(json).toMatchSnapshot();
    expect(flat.childs[0].id).toBe(flat.childs[1].edges[0].target.id);
  });

  it('should run correctly', async () => {
    const root = path.join(__dirname, '../../tests/__fixtures__');
    const res = await analyser({
      provider: new FSProvider({
        path: root,
      }),
    });

    expect(res.toJson(root)).toMatchSnapshot();

    const flatted = flatten(res, { merge: true });

    // Check that inComponent was updated
    const vercel = flatted.childs.find((child) => child.name === 'Vercel')!;
    const app = flatted.childs.find((child) => child.name === '@fake/app');
    expect(app!.inComponent!.id).toBe(vercel.id);

    // Check that edge.target was updated
    const datadog = flatted.childs.find((child) => child.name === 'Datadog')!;
    const api = flatted.childs.find((child) => child.name === '@fake/api');
    expect(api!.edges[0].target.id).toBe(datadog.id);

    expect(JSON.parse(JSON.stringify(flatted.toJson(root)))).toMatchSnapshot();
  });
});
