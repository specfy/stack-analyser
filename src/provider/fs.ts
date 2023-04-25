import fs from 'fs/promises';
import path from 'node:path';

import type { BaseProvider, ProviderFile } from './base';

export interface FSProviderOptions {
  path: string;
  ignorePaths?: Array<RegExp | string>;
}

export class FSProvider implements BaseProvider {
  opts;

  constructor(opts: FSProviderOptions) {
    this.opts = opts;
  }

  async listDir(pathRelative: string): Promise<ProviderFile[]> {
    const fp = path.join(this.opts.path, pathRelative);

    const files = await fs.readdir(fp, {
      withFileTypes: true,
    });

    const list: ProviderFile[] = files.map((file) => {
      return {
        name: file.name,
        type: file.isDirectory() ? 'dir' : 'file',
        fp: path.join(pathRelative, file.name),
      };
    });

    return list;
  }

  async open(pathRelative: string): Promise<string> {
    const fp = path.join(this.opts.path, pathRelative);
    const content = await fs.readFile(fp);

    return content.toString();
  }
}
