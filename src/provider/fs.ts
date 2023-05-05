import fs from 'fs/promises';
import path from 'node:path';

import type { BaseProvider, ProviderFile } from './base';

export interface FSProviderOptions {
  path: string;
  ignorePaths?: Array<RegExp | string>;
}

export class FSProvider implements BaseProvider {
  opts;
  basePath;

  constructor(opts: FSProviderOptions) {
    this.opts = opts;
    this.basePath = opts.path;
  }

  async listDir(pathRelative: string): Promise<ProviderFile[]> {
    const files = await fs.readdir(pathRelative, {
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
    const content = await fs.readFile(pathRelative);

    return content.toString();
  }
}
