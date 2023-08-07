import { register } from '../../rules.js';

register({
  tech: 'fastly',
  dependencies: [{ type: 'rustcargo', name: 'fastly-api' }],
});
