import { register } from '../../register.js';

register({
  tech: 'ovh.dedicated',
  name: 'OVH Dedicated Server',
  type: 'hosting',
  dependencies: [
    { type: 'terraform.resource', name: 'ovh_dedicated_server_install_task' },
    { type: 'terraform.resource', name: 'ovh_me_installation_template' },
    { type: 'terraform.resource', name: 'ovh_dedicated_server_update' },
  ],
});
