import { register } from '../../register.js';

register({
  tech: 'splitio',
  name: 'Split',
  type: 'saas',
  dependencies: [
    {
      type: 'npm',
      name: /^@splitsoftware\//,
      example: '@splitsoftware/splitio',
    },
    { type: 'golang', name: 'github.com/splitio/go-client/v6' },
    { type: 'ruby', name: 'splitclient-rb' },
  ],
});
