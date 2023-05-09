import path from 'node:path';

import type { Octokit } from 'octokit';

import type { BaseProvider, ProviderFile } from './base.js';

export interface GithubAPIProviderOptions {
  path: string;
  octokit: Octokit;
  owner: string;
  repo: string;
  hash: string;
  ignorePaths?: Array<RegExp | string>;
}

export class GithubAPIProvider implements BaseProvider {
  opts;
  basePath;
  private tree: ProviderFile[] | null = null;

  constructor(opts: GithubAPIProviderOptions) {
    this.opts = opts;
    this.basePath = opts.path;
  }

  async listDir(pathRelative: string): Promise<ProviderFile[]> {
    if (!this.tree) {
      await this.getTree();
    }

    return this.tree!.filter((item) => {
      return path.dirname(item.fp) === pathRelative;
    });
  }

  async open(pathRelative: string): Promise<string> {
    const res = await this.opts.octokit.rest.repos.getContent({
      owner: this.opts.owner,
      repo: this.opts.repo,
      tree_sha: this.opts.hash,
      path: pathRelative,
    });

    if (!('content' in res.data)) {
      throw new Error('no content in data');
    }

    const decoded = Buffer.from(res.data.content, 'base64').toString();
    return decoded;
  }

  private async getTree() {
    const res = await this.opts.octokit.rest.git.getTree({
      owner: this.opts.owner,
      repo: this.opts.repo,
      tree_sha: this.opts.hash,
      recursive: 'true',
    });

    const tree: ProviderFile[] = res.data.tree.map((item) => {
      if (!item.path) {
        throw new Error('no path');
      }

      const name = path.basename(item.path);

      return {
        name,
        type: item.type === 'blob' ? 'file' : 'dir',
        fp: path.join('/', item.path),
      };
    });

    this.tree = tree;
  }
}
