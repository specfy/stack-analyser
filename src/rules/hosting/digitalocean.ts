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
  ],
});
