import path from 'node:path';

import { describe, it, expect } from 'vitest';

import { Payload } from '../payload';
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

    const flat = new Payload({ name: 'flat', folderPath: '/' });
    flatten(res, flat);

    const json: TechAnalyser = JSON.parse(JSON.stringify(flat));
    expect(json).toStrictEqual({
      childs: [
        {
          childs: [],
          dependencies: {},
          edges: [],
          group: 'component',
          id: expect.any(String),
          inComponent: null,
          languages: {},
          name: 'db',
          parent: null,
          path: ['/docker-compose.yml', '/package.json'],
          tech: 'postgresql',
          techs: {},
        },
        {
          childs: [],
          dependencies: {
            pg: '1.0.0',
          },
          edges: [
            {
              portSource: 'right',
              portTarget: 'left',
              read: true,
              to: expect.any(String),
              vertices: [],
              write: true,
            },
          ],
          group: 'component',
          id: expect.any(String),
          inComponent: null,
          languages: {
            JSON: 1,
            YAML: 1,
          },
          name: 'test',
          parent: null,
          path: ['/package.json'],
          tech: null,
          techs: {},
        },
        {
          childs: [],
          dependencies: {},
          edges: [],
          group: 'component',
          id: expect.any(String),
          inComponent: null,
          languages: {},
          name: 'main',
          parent: null,
          path: ['/'],
          tech: null,
          techs: {},
        },
      ],
      dependencies: {},
      edges: [],
      group: 'component',
      id: expect.any(String),
      inComponent: null,
      languages: {
        JSON: 1,
        YAML: 1,
      },
      name: 'flat',
      path: ['/'],
      tech: null,
      techs: {},
    });

    expect(json.childs[0].id).toEqual(json.childs[1].edges[0].to);
  });

  it('should run correctly', async () => {
    const res = await techAnalyser({
      provider: new FSProvider({
        path: path.join(__dirname, '../../tests/__fixtures__'),
      }),
    });

    expect(res.toJson()).toStrictEqual({
      childs: [
        {
          id: expect.any(String),
          name: 'db',
          group: 'component',
          edges: [],
          languages: {},
          path: ['/docker-compose.yml'],
          tech: 'postgresql',
          techs: [],
          inComponent: null,
          childs: [],
        },
        {
          id: expect.any(String),
          name: 'fake',
          edges: [],
          group: 'component',
          path: ['/package.json'],
          inComponent: null,
          tech: null,
          languages: {
            HCL: 1,
            JSON: 1,
            YAML: 1,
          },
          techs: [
            'docker',
            'eslint',
            'nodejs',
            'prettier',
            'terraform',
            'typescript',
          ],
          childs: [
            {
              id: expect.any(String),
              name: '@fake/api',
              edges: [],
              group: 'component',
              path: ['/pkgs/api/package.json'],
              tech: null,
              inComponent: null,
              languages: {
                JSON: 1,
              },
              techs: ['fastify', 'nodejs', 'prisma', 'typescript'],
              childs: [],
            },
            {
              id: expect.any(String),
              name: '@fake/app',
              edges: [],
              group: 'component',
              path: ['/pkgs/app/package.json'],
              inComponent: expect.any(String),
              tech: null,
              languages: {
                HTML: 1,
                JSON: 1,
                SCSS: 1,
              },
              techs: [
                'html',
                'nodejs',
                'react',
                'scss',
                'typescript',
                'vercel',
                'vite',
              ],
              childs: [
                {
                  id: expect.any(String),
                  name: 'vercel',
                  group: 'hosting',
                  languages: {},
                  edges: [],
                  path: ['/pkgs/app/package.json'],
                  tech: 'vercel',
                  inComponent: null,
                  techs: [],
                  childs: [],
                },
              ],
            },
            {
              id: expect.any(String),
              name: 'GCP',
              group: 'hosting',
              languages: {},
              edges: [],
              path: ['/terraform/.terraform.lock.hcl'],
              tech: 'gcp',
              inComponent: null,
              techs: [],
              childs: [],
            },
            {
              id: expect.any(String),
              name: 'Vercel',
              group: 'hosting',
              languages: {},
              edges: [],
              path: ['/terraform/.terraform.lock.hcl'],
              tech: 'vercel',
              inComponent: null,
              techs: [],
              childs: [],
            },
          ],
        },
        {
          id: expect.any(String),
          name: 'redis',
          group: 'component',
          edges: [],
          languages: {},
          path: ['/docker-compose.yml'],
          tech: 'redis',
          techs: [],
          inComponent: null,
          childs: [],
        },
        {
          id: expect.any(String),
          name: 'unknown',
          group: 'component',
          edges: [],
          languages: {},
          path: ['/docker-compose.yml'],
          tech: null,
          techs: [],
          inComponent: null,
          childs: [],
        },
      ],
      edges: [],
      group: 'component',
      id: expect.any(String),
      inComponent: null,
      languages: {},
      name: 'main',
      path: ['/'],
      tech: null,
      techs: [],
    });

    const flatted = flatten(res);
    expect(
      cleanSnapshot(JSON.parse(JSON.stringify(flatted.toJson())))
    ).toMatchSnapshot();
  });
});
