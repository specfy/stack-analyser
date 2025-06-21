import { register } from '../../register.js';

register({
  tech: 'apacheCordova',
  name: 'Cordova',
  type: 'runtime',
  dependencies: [
    { type: 'npm', name: 'cordova' },
    { type: 'npm', name: 'cordova-android' },
    { type: 'npm', name: 'cordova-ios' },
    { type: 'npm', name: 'cordova-windows' },
    { type: 'npm', name: 'cordova-browser' },
    { type: 'npm', name: 'cordova-electron' },
    { type: 'npm', name: 'cordova-plugin-camera' },
    { type: 'npm', name: 'cordova-plugin-file' },
    { type: 'npm', name: '@types/cordova' },
  ],
});
