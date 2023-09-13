import { register } from '../../register.js';

register({
  tech: 'cloudflare.pages',
  name: 'Cloudflare Pages',
  type: 'hosting',
  dependencies: [
    {
      type: 'terraform.resource',
      name: /^cloudflare_pages_/,
      example: 'cloudflare_pages_domain',
    },
    { type: 'githubAction', name: 'cloudflare/pages-action' },
  ],
});
