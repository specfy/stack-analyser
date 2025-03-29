import childProcess from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';

import { describe, expect, it } from 'vitest';

const execFileAsync = promisify(childProcess.execFile);

describe(
  'cli',
  () => {
    it('should analyse', async () => {
      const now = new Date();

      const root = path.join(import.meta.dirname, '../');
      const file = path.join(import.meta.dirname, './cli.ts');
      const res = await execFileAsync('tsx', [file, './'], {
        env: { ...process.env, LOG_LEVEL: 'info' },
      });

      // TODO: change consola formatter
      expect(res.stdout).toBe(`[log] ▶ Path ${root}
[log]
[log] Output ${root}output.json
`);

      const stat = await fs.stat(path.join(root, 'output.json'));

      expect(stat.ctime.getTime()).toBeGreaterThan(now.getTime());
    });
  },
  {
    timeout: 10_000,
  }
);
