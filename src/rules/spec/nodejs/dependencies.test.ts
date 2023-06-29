import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import type { AllowedKeys } from '../../../index.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';
import { rawList } from '../../../rules.js';

const dependencies: Record<string, string> = {};
for (const item of rawList) {
  if (item.type !== 'dependency' || item.ref.type !== 'npm') {
    continue;
  }
  dependencies['example' in item.ref ? item.ref.example : item.ref.name] =
    '0.0.0';
}
const packageJson = {
  name: 'test',
  dependencies,
};

describe('npm', () => {
  it('should match everything', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['package.json'],
        },
        files: {
          '/package.json': JSON.stringify(packageJson),
        },
      }),
    });
    const match: AllowedKeys[] = [
      'algolia',
      'angular',
      'auth0',
      'aws',
      'bootstrap',
      'browserstack',
      'couchbase',
      'cypressci',
      'datadog',
      'dynamodb',
      'elasticsearch',
      'esbuild',
      'eslint',
      'express',
      'fastify',
      'gcp',
      'gcp.cloudrun',
      'gcp.gce',
      'gcp.pubsub',
      'github',
      'hotjar',
      'influxdb',
      'koa',
      'logrocket',
      'mailjet',
      'mariadb',
      'memcached',
      'mongodb',
      'mysql',
      'neo4j',
      'netlify',
      'newrelic',
      'nodejs',
      'postgresql',
      'prettier',
      'prisma',
      'rabbitmq',
      'react',
      'reactemail',
      'redis',
      'relativeci',
      'renovate',
      'rollup',
      'sentry',
      'sequelize',
      'snyk',
      'socketio',
      'sqreen',
      'storybook',
      'strapi',
      'tailwind',
      'typescript',
      'vercel',
      'vite',
      'vue',
      'webpack',
    ];
    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toStrictEqual(match);
  });

  it('should match nothing', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['package.json'],
        },
        files: {
          '/package.json': JSON.stringify({ foo: 'bar' }),
        },
      }),
    });
    const match: AllowedKeys[] = ['nodejs'];
    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toStrictEqual(match);
  });
});
