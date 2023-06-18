export interface ProviderFile {
  name: string;
  type: 'dir' | 'file';
  fp: string;
}

export interface BaseProvider {
  basePath: string;
  listDir: (pathRelative: string) => Promise<ProviderFile[]>;
  open: (path: string) => Promise<string>;
}

export const IGNORED_DIVE_PATHS = [
  'node_modules',
  '.git',
  '.vscode',
  'dist',
  'build',
  'bin',
  'static',
  'public',
  'vendor',
  '.svn',
  '.log',
  '.npm',
  '.nuxt',
  '.serverless',
  '.fusebox',
  '.dynamodb',
  '.vuepress',
  'migrations',
  '.vercel',
  '.terraform',
  'terraform.tfstate.d',
  '__fixtures__',
  '__snapshots__',
];
