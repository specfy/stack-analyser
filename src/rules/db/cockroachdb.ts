import { register } from '../../register.js';

register({
  tech: 'cockroachdb',
  name: 'CockroachDB',
  type: 'db',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/cockroachdb/cockroach',
    },
    { type: 'php', name: 'nbj/cockroachdb-laravel' },
  ],
});
