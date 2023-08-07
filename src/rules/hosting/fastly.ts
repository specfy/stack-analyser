import { register } from '../../rules.js';

register({
  tech: 'fastly',
  dependencies: [
    { type: 'rust', name: 'fastly-api' },
    {
      type: 'ruby',
      name: 'fastly',
    },
    { type: 'npm', name: 'fastly' },
    {
      type: 'npm',
      name: /^@fastly\//,
      example: '@fastly/performance-observer-polyfill',
    },
  ],
});
