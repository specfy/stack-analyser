import { describe, expect, it } from 'vitest';

import { techAnalyser } from '../analyser';
import { FakeProvider } from '../provider/fake';
import { rawList } from '../rules';
import '.';

const dockerCompose: string[] = [
  `version: '3'
services:`,
];
for (const item of rawList) {
  if (item.type !== 'dependency' || item.ref.type !== 'docker') {
    continue;
  }
  const example =
    'example' in item.ref ? item.ref.example : `${item.ref.name}:0.0.0`;
  const [name] = example.split(':');
  dockerCompose.push(`
  ${name}:
    image: ${example}
`);
}

describe('npm', () => {
  it('should match everything', async () => {
    const res = await techAnalyser({
      provider: new FakeProvider({
        paths: {
          '/': ['docker-compose.yml'],
        },
        files: {
          '/docker-compose.yml': dockerCompose.join(''),
        },
      }),
    });
    expect(res.toJson().techs).toStrictEqual([
      'cassandra',
      'couchbase',
      'cypressci',
      'docker',
      'elasticsearch',
      'influxdb',
      'jenkins',
      'mariadb',
      'memcached',
      'mongodb',
      'mysql',
      'neo4j',
      'nodejs',
      'percona',
      'postgresql',
      'rabbitmq',
      'redis',
      'strapi',
      'vault',
    ]);
  });
});
