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

    expect(res).toStrictEqual({
      services: [
        {
          edges: [],
          name: 'rfc-editor',
          path: '/',
          tech: {
            db: new Set(),
            hosting: new Set(),
            language: new Set(),
            messaging: new Set(),
            sass: new Set(),
            tool: new Set(),
          },
        },
        {
          edges: [],
          name: 'api',
          path: '/pkgs/api',
          tech: {
            db: new Set(),
            hosting: new Set(),
            language: new Set(),
            messaging: new Set(),
            sass: new Set(),
            tool: new Set(),
          },
        },
        {
          edges: [],
          name: 'app',
          path: '/pkgs/app',
          tech: {
            db: new Set(),
            hosting: new Set(),
            language: new Set(),
            messaging: new Set(),
            sass: new Set(),
            tool: new Set(),
          },
        },
        {
          edges: [],
          name: 'website',
          path: '/pkgs/website',
          tech: {
            db: new Set(),
            hosting: new Set(),
            language: new Set(),
            messaging: new Set(),
            sass: new Set(),
            tool: new Set(),
          },
        },
      ],
      tech: {
        db: new Set(),
        hosting: new Set(),
        language: new Set(['nodejs', 'typescript']),
        messaging: new Set(),
        sass: new Set(),
        tool: new Set(['eslint', 'docker', 'stylelint', 'terraform']),
      },
    });
  });
});
