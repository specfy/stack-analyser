import { register } from '../../register.js';

register({
  tech: 'biomejs',
  name: 'Biome JS',
  type: 'linter',
  files: ['biome.json', 'biome.jsonc'],
  dependencies: [{ type: 'npm', name: '@biomejs/biome' }],
});
