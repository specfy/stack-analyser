import { register } from '../../register.js';

register({
  tech: 'aws.elasticache',
  name: 'ElastiCache',
  type: 'db',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-elasticache' },
    { type: 'rust', name: 'aws-sdk-elasticache' },
    { type: 'ruby', name: 'aws-sdk-elasticache' },
  ],
});
