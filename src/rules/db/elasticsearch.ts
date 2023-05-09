import { register } from '../../rules.js';

register({
  tech: 'elasticsearch',
  dependencies: [
    { type: 'npm', name: '@elastic/elasticsearch' },
    { type: 'docker', name: /elasticsearch/, example: 'elasticsearch:0.0.0' },
    {
      type: 'terraform',
      name: 'registry.terraform.io/phillbaker/elasticsearch',
    },
  ],
});
