import { register } from '../../register.js';

register({
  tech: 'airbyte',
  name: 'Airbyte',
  type: 'etl',
  dependencies: [
    { type: 'docker', name: /^airbyte\//, example: 'airbyte/worker' },
    {
      type: 'terraform',
      name: 'registry.terraform.io/airbytehq/airbyte',
    },
  ],
});
