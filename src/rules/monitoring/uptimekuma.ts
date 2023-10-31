import { register } from '../../register.js';

register({
  tech: 'uptimekuma',
  name: 'Uptime Kuma',
  type: 'monitoring',
  dependencies: [{ type: 'docker', name: 'louislam/uptime-kuma' }],
});
