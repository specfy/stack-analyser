import { register } from '../../register.js';

register({
  tech: 'capacitorjs',
  name: 'Capacitor',
  type: 'framework',
  files: ['capacitor.config.ts'],
  dependencies: [{ type: 'npm', name: '@capacitor/app' }],
});
