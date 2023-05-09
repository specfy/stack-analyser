import { register } from '../../rules.js';

register({
  tech: 'hotjar',
  dependencies: [{ type: 'npm', name: '@hotjar/browser' }],
});
