import { register } from '../../rules.js';

register({
  tech: 'kibana',
  dependencies: [{ type: 'docker', name: /kibana/, example: 'kibana:0.0.0' }],
});
