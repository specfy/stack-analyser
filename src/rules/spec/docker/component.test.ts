import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';

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

    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });

  it.each([
    'docker-compose.dev.yml',
    'docker-compose-prod.yml',
    'docker-compose.yaml',
  ])('should match: %s', async (filename) => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': [filename],
        },
        files: {
          [`/${filename}`]: dockerCompose.join(''),
        },
      }),
    });

    expect(
      Array.from(flatten(res, { merge: true }).techs).length
    ).toBeGreaterThan(0);
  });

  it('should ignore file', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['docker-compose.yml.example'],
        },
        files: {
          '/docker-compose.yml.example': dockerCompose.join(''),
        },
      }),
    });

    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toStrictEqual([]);
  });

  it('should not extract variables', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['docker-compose.yml'],
        },
        files: {
          '/docker-compose.yml': `version: '3'
services:
  boots:
    image: $BOOTS_IMAGE`,
        },
      }),
    });

    expect(
      Array.from(flatten(res, { merge: true }).dependencies).sort()
    ).toStrictEqual([]);
  });

  it('should not match component without image', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['docker-compose.yml'],
        },
        files: {
          '/docker-compose.yml': `version: '3'
services:
  boots:
    build: .`,
        },
      }),
    });

    expect(
      Array.from(flatten(res, { merge: true }).dependencies).sort()
    ).toStrictEqual([]);
  });
});
