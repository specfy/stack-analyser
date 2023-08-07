import { register } from '../../rules.js';

register({
  tech: 'fastly',
  dependencies: [{ type: 'rust', name: 'fastly-api' }],
});
