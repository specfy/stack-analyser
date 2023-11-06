import fs from 'fs/promises';
import path from 'node:path';

import { l } from '../common/log.js';

import type { BaseProvider, ProviderFile } from './base.js';

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

  async open(pathRelative: string): Promise<string | null> {
    try {
      const content = await fs.readFile(pathRelative);
      return content ? content.toString() : null;
    } catch (err) {
      l.error('Failed to open file', { pathRelative, err });
      return null;
    }
  }
}
