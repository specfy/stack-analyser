import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';
import { cleanNestedSnapshot } from '../../../tests/helpers.js';

import '../../../autoload.js';

describe('golang', () => {
  it('should match a service', async () => {
    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['cmd/', 'go.mod'],
          '/cmd': ['server/'],
          '/cmd/server': ['main.go'],
        },
        files: {
          '/go.mod': `module github.com/specfy/specfy`,
          '/cmd/main.go': `hello world`,
        },
      }),
    });
    expect(cleanNestedSnapshot(flatten(res).toJson())).toMatchSnapshot();
  });
});
