import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';
import { rawList } from '../../../rules.js';

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

describe('docker', () => {
  it('should match everything', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['docker-compose.yml'],
        },
        files: {
          '/docker-compose.yml': dockerCompose.join(''),
        },
      }),
    });

    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toMatchSnapshot();
  });

  it('should match a non standard docker compose', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['docker-compose.dev.yml'],
        },
        files: {
          '/docker-compose.dev.yml': dockerCompose.join(''),
        },
      }),
    });

    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toMatchSnapshot();
  });
});
