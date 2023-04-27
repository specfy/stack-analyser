import { register } from '../../rules';

register({
  tech: 'kibana',
  dependencies: [{ type: 'docker', name: /kibana/ }],
});
