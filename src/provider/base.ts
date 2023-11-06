export interface ProviderFile {
  name: string;
  type: 'dir' | 'file';
  fp: string;
}

export interface BaseProvider {
  basePath: string;
  listDir: (pathRelative: string) => Promise<ProviderFile[]>;
  open: (path: string) => Promise<string | null>;
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
  'e2e',
  '__fixtures__',
  '__snapshots__',
  'tmp',

  // -- Dot folder
  '.artifacts',
  '.assets',
  '.azure',
  '.azure-pipelines',
  '.bundle',
  '.cache',
  '.changelog',
  '.devcontainer',
  '.docker',
  '.dynamodb',
  '.fusebox',
  '.git',
  // needed to detect github actions
  // '.github',
  '.gitlab',
  '.gradle',
  '.log',
  '.metadata',
  '.npm',
  '.nuxt',
  '.react-email',
  '.release',
  '.semgrep',
  '.serverless',
  '.svn',
  '.terraform',
  '.vercel',
  '.vscode',
  '.vuepress',
];
