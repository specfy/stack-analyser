import { register } from '../../register.js';

register({
  tech: 'optimizely',
  name: 'Optimizely',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@optimizely/optimizely-sdk' },
    { type: 'npm', name: '@optimizely/react-sdk' },
    { type: 'npm', name: '@optimizely/js-sdk-utils' },
    { type: 'npm', name: '@optimizely/js-sdk-logging' },
    { type: 'npm', name: '@optimizely/js-sdk-event-processor' },
    { type: 'ruby', name: 'optimizely-sdk' },
    { type: 'ruby', name: 'optimizely' },
    { type: 'ruby', name: 'optimizely_server_side' },
    { type: 'php', name: 'optimizely/optimizely-sdk' },
    { type: 'githubAction', name: 'optimizely/upload-custom-code-action' },
    { type: 'golang', name: 'github.com/optimizely/go-sdk' },
  ],
});
