import { register } from '../../register.js';

register({
  tech: 'capacitorjs',
  name: 'Capacitor',
  type: 'runtime',
  files: ['capacitor.config.ts'],
  dependencies: [{ type: 'npm', name: '@capacitor/app' }],
});
