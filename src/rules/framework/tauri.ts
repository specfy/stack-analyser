import { register } from '../../register.js';

register({
  tech: 'tauri',
  name: 'Tauri',
  type: 'framework',
  files: ['tauri.conf.js'],
  dependencies: [
    { type: 'rust', name: 'tauri' },
    { type: 'npm', name: /^@tauri-apps\//, example: '@tauri-apps' },
  ],
});
