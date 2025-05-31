import { register } from '../../register.js';

register({
  tech: 'twitter',
  name: 'X',
  type: 'communication',
  dependencies: [
    { type: 'npm', name: 'twitter-api-v2' },
    { type: 'python', name: 'tweepy' },
    { type: 'npm', name: 'passport-twitter' },
    { type: 'terraform.resource', name: 'airbyte_source_twitter' },
  ],
});
