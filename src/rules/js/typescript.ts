import { register } from '../../register.js';

register({
  tech: 'typescript',
  name: 'Typescript',
  type: 'language',
  files: /tsconfig(.[a-zA-Z0-9_-]+)?.json/,
  example: 'tsconfig.json',
  extensions: ['.ts', '.tsx'],
  dependencies: [{ type: 'npm', name: 'typescript' }],
});
