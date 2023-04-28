import { register } from '../../rules';

register({
  tech: 'vault',
  dependencies: [{ type: 'docker', name: /vault/, example: 'vault:0.0.0' }],
});
