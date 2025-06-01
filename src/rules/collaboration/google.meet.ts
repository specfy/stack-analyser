import { register } from '../../register.js';

register({
  tech: 'google.meet',
  name: 'Google Meet',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@google-apps/meet' },
    { type: 'ruby', name: 'google-apis-meet_v2' },
    { type: 'ruby', name: 'google-apps-meet-v2' },
    { type: 'ruby', name: 'google-apps-meet' },
  ],
});
