import path from 'node:path';

import type { BaseProvider, ProviderFile } from './base';

export class FakeProvider implements BaseProvider {
  private paths;
  private files;

  constructor(opts: {
    paths: Record<string, string[]>;
    files: Record<string, string>;
  }) {
    this.paths = opts.paths;
    this.files = opts.files;
  }

  listDir(pathRelative: string): Promise<ProviderFile[]> {
    if (!(pathRelative in this.paths)) {
      return Promise.resolve([]);
    }

    const files = this.paths[pathRelative].sort();
    return Promise.resolve(
      files.map((file) => {
        return {
          name: file,
          type: file.endsWith('/') ? 'dir' : 'file',
          fp: path.join(pathRelative, file),
        };
      })
    );
  }

  open(pathRelative: string): Promise<string> {
    if (!(pathRelative in this.files)) {
      throw new Error(`not found "${pathRelative}"`);
    }

    return Promise.resolve(this.files[pathRelative]);
  }
}
