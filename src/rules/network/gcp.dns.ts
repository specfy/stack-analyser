import { register } from '../../register.js';

register({
  tech: 'gcp.dns',
  name: 'Google DNS',
  type: 'network',
  dependencies: [
    { type: 'npm', name: '@google-cloud/dns' },
    {
      type: 'terraform.resource',
      name: /^google_dns_/,
      example: 'google_dns_record_set',
    },
    { type: 'ruby', name: 'google-cloud-dns' },
  ],
});
