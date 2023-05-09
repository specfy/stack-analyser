import childProcess from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import util from 'node:util';

import { describe, expect, it } from 'vitest';

const execFileAsync = util.promisify(childProcess.execFile);

describe('CLI', () => {
  it('should analyse', async () => {
    const now = new Date();

    const root = path.join(__dirname, '../');
    const file = path.join(__dirname, './cli.ts');
    const res = await execFileAsync('ts-node', [file, './'], {});

    expect(res.stdout).toStrictEqual(`▶ ${root}

Output ${root}output.json
`);

    const stat = await fs.stat(path.join(root, 'output.json'));
    expect(stat.ctime.getTime()).toBeGreaterThan(now.getTime());
  });
});
