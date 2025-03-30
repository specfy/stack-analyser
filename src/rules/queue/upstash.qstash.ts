import { register } from '../../register.js';

register({
  tech: 'upstash.qstash',
  name: 'Upstash QStash',
  type: 'queue',
  dependencies: [{ type: 'npm', name: '@upstash/qstash' }],
});
