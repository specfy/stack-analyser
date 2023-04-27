import { register } from '../../rules';

register({
  tech: 'vault',
  dependencies: [{ type: 'docker', name: /vault/ }],
});
