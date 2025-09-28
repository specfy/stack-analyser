import { register } from '../../register.js';

register({
  tech: 'simpleanalytics',
  name: 'Simple Analytics',
  type: 'analytics',
  dotenv: ['SIMPLEANALYTICS_'],
  dependencies: [{ type: 'npm', name: '@analytics/simple-analytics' }],
});
