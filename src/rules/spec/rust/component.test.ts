import { describe, expect, it } from 'vitest';

import { analyser } from '../../../analyser/index.js';
import { rawList } from '../../../loader.js';
import { flatten } from '../../../payload/helpers.js';
import { FakeProvider } from '../../../provider/fake.js';

import '../../../autoload.js';

describe('rust (component)', () => {
  it('should match everything', async () => {
    const lockfile: string[] = [
      `[package]
name = "svix-server"
version = "1.8.0"

[dependencies]
`,
    ];

    for (const item of rawList) {
      if (item.type !== 'dependency' || item.ref.type !== 'rust') {
        continue;
      }

      const example = 'example' in item.ref ? item.ref.example : item.ref.name;
      lockfile.push(`${example} = "1.0.0"\n`);
    }

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['Cargo.toml'],
        },
        files: {
          '/Cargo.toml': lockfile.join(''),
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.techs).sort()).toMatchSnapshot();
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });

  it('should match foreign dependencies', async () => {
    const lockfile: string[] = [
      `[package]
name = "svix-server"
version = "1.8.0"

[dependencies]
test = { path = "../test" }
hello = { path = "../world", version = "1.0.0" }
axum = { version = "0.6.1", features = ["headers"] }

[dev-dependencies]
anyhow = "1.0.56"
redis_cluster_async = { git = "https://github.com/redis-rs/redis-cluster-async.git", rev = "e6fe168" }

[build-dependencies]
foobar = "^1.0.0"
`,
    ];

    const res = await analyser({
      provider: new FakeProvider({
        paths: {
          '/': ['Cargo.toml'],
        },
        files: {
          '/Cargo.toml': lockfile.join(''),
        },
      }),
    });

    const merged = flatten(res, { merge: true });
    expect(Array.from(merged.dependencies).sort()).toMatchSnapshot();
  });
});
