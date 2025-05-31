import { register } from '../../register.js';

register({
  tech: 'klarna',
  name: 'Klarna',
  type: 'payment',
  dependencies: [
    { type: 'ruby', name: 'klarna_proxy' },
    { type: 'ruby', name: 'klarna-checkout' },
    { type: 'terraform.resource', name: 'airbyte_source_klarna' },
  ],
});
