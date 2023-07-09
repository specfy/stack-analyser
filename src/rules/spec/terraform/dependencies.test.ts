import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import type { AllowedKeys } from '../../../index.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';
import { rawList } from '../../../rules.js';

describe('terraform (lockfile)', () => {
  it('should match everything', async () => {
    const lockfile: string[] = [``];

    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'terraform') {
        continue;
      }

      const example = 'example' in item.ref ? item.ref.example : item.ref.name;
      lockfile.push(`
      provider "${example}" {
        version = "0.0.0"
      }
    `);
    }

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['.terraform.lock.hcl'],
        },
        files: {
          '/.terraform.lock.hcl': lockfile.join(''),
        },
      }),
    });

    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toMatchSnapshot();
  });

  it('should match nothing', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['.terraform.lock.hcl'],
        },
        files: {
          '/.terraform.lock.hcl': '',
        },
      }),
    });

    const match: AllowedKeys[] = ['terraform'];
    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toStrictEqual(match);
  });
});

describe('terraform (resource)', () => {
  it('should match everything', async () => {
    const resource: string[] = [``];

    for (const item of rawList) {
      if (
        item.type !== 'dependency' ||
        item.ref.type !== 'terraform.resource'
      ) {
        continue;
      }

      const example = 'example' in item.ref ? item.ref.example : item.ref.name;
      resource.push(`
      resource "${example}" "foobar" {
        name     = "hello"
      }
    `);
    }

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['main.tf'],
        },
        files: {
          '/main.tf': resource.join(''),
        },
      }),
    });

    expect(
      Array.from(flatten(res, { merge: true }).techs).sort()
    ).toMatchSnapshot();
  });

  it('should match in tf file', async () => {
    const resource: string[] = [
      `
    resource "unknown" "foobar" {
      name     = "hello"
    }`,
    ];

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['main.tf'],
        },
        files: {
          '/main.tf': resource.join(''),
        },
      }),
    });

    const match: AllowedKeys[] = ['terraform'];
    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toStrictEqual(match);
  });

  it('should match nothing but register dependencies', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['.terraform.lock.hcl'],
        },
        files: {
          '/.terraform.lock.hcl': `
          provider "helloworld" {
            version = "0.0.0"
          }
          `,
        },
      }),
    });

    const match: AllowedKeys[] = ['terraform'];
    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toStrictEqual(match);
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });
});
