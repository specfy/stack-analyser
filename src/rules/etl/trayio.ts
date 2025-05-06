import { register } from '../../register.js';

register({
  tech: 'trayio',
  name: 'Tray.ai',
  type: 'etl',
  dependencies: [{ type: 'npm', name: /^@trayio-app\//, example: '@trayio/cdk-cli' }],
});
