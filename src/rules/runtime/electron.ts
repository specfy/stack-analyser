import { register } from '../../register.js';

register({
  tech: 'electron',
  name: 'Electron',
  type: 'runtime',
  dependencies: [
    { type: 'npm', name: 'electron' },
    { type: 'githubAction', name: 'samuelmeuli/action-electron-builder' },
  ],
});
