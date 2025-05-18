import { register } from '../../register.js';

register({
  tech: 'calcom',
  name: 'Cal.com',
  type: 'collaboration',
  dependencies: [{ type: 'npm', name: /^@calcom\//, example: '@calcom/sdk' }],
});
