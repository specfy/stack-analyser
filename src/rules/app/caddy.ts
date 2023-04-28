import { register } from '../../rules';

register({
  tech: 'caddy',
  files: /\.Caddyfile$/,
  example: 'test.Caddyfile',
  dependencies: [{ type: 'docker', name: /caddy/, example: 'caddy:0.0.0' }],
});
