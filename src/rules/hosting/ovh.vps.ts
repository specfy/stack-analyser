import { register } from '../../register.js';

register({
  tech: 'ovh.vps',
  name: 'OVH VPS',
  type: 'hosting',
  dependencies: [{ type: 'terraform.resource', name: 'ovh_vps' }],
});
