import { register } from '../../rules.js';

register({
  tech: 'gcp.dns',
  dependencies: [
    { type: 'npm', name: '@google-cloud/dns' },
    { type: 'terraform.resource', name: 'google_dns_record_set' },
    { type: 'ruby', name: 'google-cloud-dns' },
  ],
});
