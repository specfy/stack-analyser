import path from 'node:path';

import type { BaseProvider, ProviderFile } from './base.js';

export class FakeProvider implements BaseProvider {
  basePath: string;
  private paths;
  private files;

  constructor(opts: { paths: Record<string, string[]>; files: Record<string, string> }) {
    this.paths = opts.paths;
    this.files = opts.files;
    this.basePath = '/';
  }

  listDir(pathRelative: string): Promise<ProviderFile[]> {
    if (!(pathRelative in this.paths)) {
      return Promise.resolve([]);
    }

    const files = this.paths[pathRelative].sort();
    return Promise.resolve(
      files.map((file) => {
        const isDir = file.endsWith('/');
        return {
          name: isDir ? file.slice(0, Math.max(0, file.length - 1)) : file,
          type: isDir ? 'dir' : 'file',
          fp: path.join(pathRelative, file),
        };
      })
    );
  }

  stat(): Promise<{ size: number }> {
    return Promise.resolve({ size: 1000 });
  }

  open(pathRelative: string): Promise<string> {
    if (!(pathRelative in this.files)) {
      throw new Error(`not found "${pathRelative}"`);
    }

    return Promise.resolve(this.files[pathRelative]);
  }
}
