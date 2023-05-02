import path from 'node:path';

import { describe, it, expect } from 'vitest';

import { FakeProvider } from '../provider/fake';
import { FSProvider } from '../provider/fs';

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
      components: [],
      edges: [],
      inComponent: null,
      languages: {},
      path: '/',
      tech: null,
      techs: [],
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
          '/package.json': '{ "name": "test", "dependencies": {"pg": "1.0.0"}',
        },
      }),
    });

    expect(res.toJson().components).toStrictEqual([
      {
        edges: [],
        group: 'component',
        id: expect.any(String),
        inComponent: null,
        languages: {},
        name: 'db',
        path: '/docker-compose.yml',
        tech: 'postgresql',
        techs: [],
      },
    ]);
  });

  it('should run correctly', async () => {
    const res = await techAnalyser({
      provider: new FSProvider({
        path: path.join(__dirname, '../../tests/__fixtures__'),
      }),
    });

    // console.log(res.toJson());
    expect(res.toJson()).toStrictEqual({
      id: expect.any(String),
      name: 'main',
      group: 'component',
      path: '/',
      tech: null,
      inComponent: null,
      edges: [],
      components: [
        {
          id: expect.any(String),
          name: '@fake/api',
          edges: [],
          group: 'component',
          path: '/pkgs/api',
          tech: null,
          inComponent: null,
          languages: {
            JSON: 1,
          },
          techs: ['fastify', 'nodejs', 'prisma', 'typescript'],
        },
        {
          id: expect.any(String),
          name: '@fake/app',
          edges: [],
          group: 'component',
          path: '/pkgs/app',
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
        },
        {
          id: expect.any(String),
          name: 'GCP',
          group: 'hosting',
          edges: [],
          languages: {},
          path: '/terraform/.terraform.lock.hcl',
          tech: 'gcp',
          techs: [],
          inComponent: null,
        },
        {
          id: expect.any(String),
          name: 'db',
          group: 'component',
          edges: [],
          languages: {},
          path: '/docker-compose.yml',
          tech: 'postgresql',
          techs: [],
          inComponent: null,
        },
        {
          id: expect.any(String),
          name: 'fake',
          edges: [],
          group: 'component',
          path: '/',
          inComponent: null,
          tech: null,
          languages: {
            HCL: 1,
            HTML: 1,
            JSON: 3,
            SCSS: 1,
            YAML: 1,
          },
          techs: [
            'docker',
            'eslint',
            'fastify',
            'gcp',
            'html',
            'nodejs',
            'prettier',
            'prisma',
            'react',
            'scss',
            'terraform',
            'typescript',
            'vercel',
            'vite',
          ],
        },
        {
          id: expect.any(String),
          name: 'redis',
          group: 'component',
          edges: [],
          languages: {},
          path: '/docker-compose.yml',
          tech: 'redis',
          techs: [],
          inComponent: null,
        },
        {
          id: expect.any(String),
          name: 'vercel',
          group: 'hosting',
          languages: {},
          edges: [],
          path: '/pkgs/app',
          tech: 'vercel',
          inComponent: null,
          techs: [],
        },
      ],
      techs: [
        'docker',
        'eslint',
        'fastify',
        'gcp',
        'html',
        'nodejs',
        'postgresql',
        'prettier',
        'prisma',
        'react',
        'redis',
        'scss',
        'terraform',
        'typescript',
        'vercel',
        'vite',
      ],
      languages: {
        HCL: 1,
        HTML: 1,
        JSON: 3,
        SCSS: 1,
        YAML: 1,
      },
    });
  });
});
