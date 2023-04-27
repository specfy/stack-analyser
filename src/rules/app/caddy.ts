import { register } from '../../rules';

register({
  tech: 'caddy',
  files: /\.Caddyfile/,
  dependencies: [{ type: 'docker', name: /caddy/ }],
});
