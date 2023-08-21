import { register } from '../../register.js';

register({
  tech: 'aws.rds',
  name: 'RDS',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-rds' },
    { type: 'npm', name: '@aws-sdk/middleware-sdk-rds' },
    { type: 'rust', name: 'aws-sdk-rds' },
    { type: 'ruby', name: 'aws-sdk-rds' },
  ],
});
