import { register } from '../../register.js';

register({
  tech: 'papertrail',
  name: 'Papertrail',
  type: 'monitoring',
  dependencies: [
    { type: 'npm', name: 'winston-papertrail' },
    { type: 'npm', name: 'pino-papertrail' },
    { type: 'php', name: 'stephanecoinon/papertrail' },
    { type: 'ruby', name: 'papertrail' },
    { type: 'golang', name: 'github.com/papertrail/go-tail/follower' },
  ],
});
