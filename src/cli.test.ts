import childProcess from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import util from 'node:util';

import { describe, expect, it } from 'vitest';

const execFileAsync = util.promisify(childProcess.execFile);

describe(
  'CLI',
  () => {
    it('should analyse', async () => {
      const now = new Date();

      const root = path.join(__dirname, '../');
      const file = path.join(__dirname, './cli.ts');
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
    timeout: 10000,
  }
);
