import path from 'node:path';

import { describe, it, expect } from 'vitest';

import { FSProvider } from '../provider/fs';

import { techAnalyser } from '.';

describe('techAnalyser', () => {
  it('should run correctly', async () => {
    const res = await techAnalyser({
      provider: new FSProvider({
        path: path.join(__dirname, '../../../specfy'),
        ignorePaths: [],
      }),
    });

    expect(res.toJson()).toStrictEqual({
      services: [
        {
          edges: [],
          name: 'rfc-editor',
          path: '/',
          tech: null,
          techs: ['eslint', 'prettier', 'typescript'],
        },
        {
          name: 'db',
          edges: [],
          path: '/docker-compose.yml',
          tech: 'postgresql',
          techs: [],
        },
        {
          edges: [],
          name: 'api',
          path: '/pkgs/api',
          tech: null,
          techs: ['fastify', 'prisma', 'typescript'],
        },
        {
          edges: [],
          name: 'app',
          path: '/pkgs/app',
          tech: null,
          techs: ['react', 'typescript', 'vite'],
        },
        {
          edges: [],
          name: 'website',
          path: '/pkgs/website',
          tech: null,
          techs: ['react', 'typescript', 'vite'],
        },
      ],
      techs: [
        'eslint',
        'prettier',
        'typescript',
        'postgresql',
        'docker',
        'stylelint',
        'nodejs',
        'fastify',
        'prisma',
        'react',
        'vite',
        'terraform',
      ],
    });
  });
});
