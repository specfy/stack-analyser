import { register } from '../../register.js';

register({
  tech: 'airbyte',
  name: 'Airbyte',
  type: 'etl',
  dependencies: [
    { type: 'docker', name: /^airbyte\//, example: 'airbyte/worker' },
  ],
});
