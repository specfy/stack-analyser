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
      name: 'main',
      path: '/',
      tech: null,
      services: [
        {
          name: 'db',
          edges: [],
          languages: {},
          path: '/docker-compose.yml',
          tech: 'postgresql',
          techs: [],
        },
        {
          edges: [],
          name: 'api',
          path: '/pkgs/api',
          tech: null,
          languages: {
            JSON: 3,
            Markdown: 1,
            Prisma: 1,
            TypeScript: 186,
            XML: 1,
          },
          techs: ['fastify', 'nodejs', 'prisma', 'typescript'],
        },
        {
          edges: [],
          name: 'app',
          path: '/pkgs/app',
          tech: null,
          languages: {
            HTML: 1,
            JSON: 5,
            SCSS: 79,
            TypeScript: 234,
          },
          techs: ['html', 'nodejs', 'react', 'scss', 'typescript', 'vite'],
        },
        {
          edges: [],
          name: 'website',
          path: '/pkgs/website',
          tech: null,
          languages: {
            CSS: 1,
            HTML: 1,
            JSON: 3,
            JavaScript: 2,
            SCSS: 1,
            TypeScript: 7,
          },
          techs: [
            'css',
            'html',
            'javascript',
            'nodejs',
            'react',
            'scss',
            'typescript',
            'vite',
          ],
        },
        {
          edges: [],
          name: 'rfc-editor',
          path: '/',
          tech: null,
          languages: {
            CSS: 1,
            HCL: 31,
            HTML: 2,
            JSON: 17,
            JavaScript: 4,
            Markdown: 2,
            Prisma: 1,
            SCSS: 80,
            Shell: 3,
            TypeScript: 427,
            XML: 1,
            YAML: 2,
          },
          techs: [
            'css',
            'docker',
            'eslint',
            'fastify',
            'html',
            'javascript',
            'nodejs',
            'postgresql',
            'prettier',
            'prisma',
            'react',
            'scss',
            'shell',
            'stylelint',
            'terraform',
            'typescript',
            'vite',
          ],
        },
      ],
      techs: [
        'css',
        'docker',
        'eslint',
        'fastify',
        'html',
        'javascript',
        'nodejs',
        'postgresql',
        'prettier',
        'prisma',
        'react',
        'scss',
        'shell',
        'stylelint',
        'terraform',
        'typescript',
        'vite',
      ],
      languages: {
        CSS: 1,
        HCL: 31,
        HTML: 2,
        JSON: 17,
        JavaScript: 4,
        Markdown: 2,
        Prisma: 1,
        SCSS: 80,
        Shell: 3,
        TypeScript: 427,
        XML: 1,
        YAML: 2,
      },
    });
  });
});
