import { register } from '../../rules.js';

register({
  tech: 'cockroachdb',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/cockroachdb/cockroach',
    },
  ],
});
