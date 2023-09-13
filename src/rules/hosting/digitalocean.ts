import { register } from '../../register.js';

register({
  tech: 'digitalocean',
  name: 'DigitalOcean',
  type: 'hosting',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/digitalocean/digitalocean',
    },
    { type: 'githubAction', name: 'digitalocean/app_action' },
    { type: 'githubAction', name: 'digitalocean/action-doctl' },
  ],
});
