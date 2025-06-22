import { register } from '../../register.js';

register({
  tech: 'appsignal',
  name: 'AppSignal',
  type: 'monitoring',
  dependencies: [
    { type: 'npm', name: 'appsignal' },
    { type: 'ruby', name: 'appsignal' },
    { type: 'python', name: 'appsignal' },
    { type: 'npm', name: '@appsignal/nodejs' },
    { type: 'npm', name: '@appsignal/javascript' },
    { type: 'npm', name: '@appsignal/react' },
    { type: 'npm', name: '@appsignal/angular' },
    { type: 'npm', name: '@appsignal/vue' },
    { type: 'npm', name: '@appsignal/ember' },
    { type: 'docker', name: 'appsignal/collector' },
  ],
});
