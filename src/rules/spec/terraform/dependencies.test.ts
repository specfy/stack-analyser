import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';
import { rawList } from '../../../rules.js';

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

describe('terraform', () => {
  it('should match everything', async () => {
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

    expect(flatten(res, { merge: true }).techs).toStrictEqual(
      new Set([
        'alibabacloud',
        'auth0',
        'aws',
        'azure',
        'datadog',
        'elasticsearch',
        'elasticstack',
        'flyio',
        'gcp',
        'github',
        'helm',
        'kubernetes',
        'mongodbatlas',
        'newrelic',
        'oraclecloud',
        'terraform',
        'vault',
        'vercel',
      ])
    );
  });
});
