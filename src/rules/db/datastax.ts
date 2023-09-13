import { register } from '../../register.js';

register({
  tech: 'datastax',
  name: 'Datastax',
  type: 'db',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/datastax/astra',
    },
    { type: 'php', name: 'datastax/php-driver' },
  ],
});
