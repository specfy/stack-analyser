import { register } from '../../register.js';

register({
  tech: 'traefik',
  name: 'Traefik',
  type: 'app',
  files: ['traefik.yml', 'traefik.yaml', 'traefik.toml'],
  dependencies: [{ type: 'docker', name: 'traefik' }],
});
