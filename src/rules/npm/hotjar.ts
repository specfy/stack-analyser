import { register } from '../../rules';

register({
  tech: 'hotjar',
  dependencies: [{ type: 'npm', name: '@hotjar/browser' }],
});
