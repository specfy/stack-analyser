import { register } from '../../register.js';

register({
  tech: 'amplitude',
  name: 'Amplitude Analytics',
  type: 'analytics',
  dependencies: [
    { type: 'npm', name: 'amplitude-js' },
    { type: 'npm', name: '@amplitude/analytics-browser' },
  ],
});
