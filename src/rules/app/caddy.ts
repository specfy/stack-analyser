import { register } from '../../register.js';

register({
  tech: 'caddy',
  name: 'Caddy',
  type: 'app',
  files: /\.Caddyfile$/,
  example: 'test.Caddyfile',
  dependencies: [{ type: 'docker', name: /caddy/, example: 'caddy:0.0.0' }],
});
