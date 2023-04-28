import { register } from '../../rules';

register({
  tech: 'kibana',
  dependencies: [{ type: 'docker', name: /kibana/, example: 'kibana:0.0.0' }],
});
