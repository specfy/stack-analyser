import { register } from '../../rules';

register({
  tech: 'nginx',
  files: ['nginx.conf'],
  dependencies: [{ type: 'docker', name: /nginx/ }],
});
