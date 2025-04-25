import { register } from '../../register.js';

register({
  tech: 'hetzner',
  name: 'Hetzner',
  type: 'cloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/hetznercloud/hcloud' },
    { type: 'golang', name: 'github.com/hetznercloud/hcloud-go/v2/hcloud' },
    { type: 'python', name: 'hcloud' },
    { type: 'php', name: 'lkdevelopment/hetzner-cloud-php-sdk' },
    { type: 'ruby', name: 'hetznercloud' },
  ],
});
