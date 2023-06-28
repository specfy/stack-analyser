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
  'dist',
  'build',
  'bin',
  'static',
  'public',
  'vendor',
  'terraform.tfstate.d',
  'migrations',
  'tests',
  '__fixtures__',
  '__snapshots__',
  'tmp',

  // -- Dot folder
  '.artifacts',
  '.azure-pipelines',
  '.dynamodb',
  '.fusebox',
  '.git',
  // needed to detect github actions
  // '.github',
  '.gitlab',
  '.log',
  '.npm',
  '.nuxt',
  '.react-email',
  '.serverless',
  '.svn',
  '.terraform',
  '.vercel',
  '.vscode',
  '.vuepress',
];
