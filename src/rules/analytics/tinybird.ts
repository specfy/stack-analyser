import { register } from '../../register.js';

register({
  tech: 'tinybird',
  name: 'Tinybird',
  type: 'analytics',
  dependencies: [
    {
      type: 'npm',
      name: /^@tinybirdco\//,
      example: '@tinybirdco/next-tinybird',
    },
  ],
});
