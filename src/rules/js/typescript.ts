import { register } from '../../rules';

register({
  tech: 'typescript',
  files: /tsconfig(.[a-zA-Z0-9_-]+)?.json/,
  example: 'tsconfig.json',
  dependencies: [{ type: 'npm', name: 'typescript' }],
});
