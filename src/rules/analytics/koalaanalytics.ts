import { register } from '../../register.js';

register({
  tech: 'koalaanalytics',
  name: 'Koala Analytics',
  type: 'analytics',
  dependencies: [{ type: 'php', name: '@getkoala/browser' }],
});
