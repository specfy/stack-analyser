import { describe, expect, it } from 'vitest';

import { techAnalyser } from '../../../analyser';
import { FakeProvider } from '../../../provider/fake';
import { rawList } from '../../../rules';

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

describe('npm', () => {
  it('should match everything', async () => {
    const res = await techAnalyser({
      provider: new FakeProvider({
        paths: {
          '/': ['.terraform.lock.hcl'],
        },
        files: {
          '/.terraform.lock.hcl': lockfile.join(''),
        },
      }),
    });
    expect(res.toJson().techs).toStrictEqual([
      'alibabacloud',
      'aws',
      'azure',
      'gcp',
      'kubernetes',
      'mongodbatlas',
      'oraclecloud',
      'terraform',
      'vault',
    ]);
  });
});
