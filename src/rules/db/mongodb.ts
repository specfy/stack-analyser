import { register } from '../../rules.js';

register({
  tech: 'mongodb',
  dependencies: [
    { type: 'npm', name: /mongoose/, example: 'mongoose' },
    { type: 'npm', name: /mongodb/, example: '@mikro-orm/mongodb' },
    { type: 'docker', name: /mongo/, example: 'mongo:0.0.0' },
    { type: 'rust', name: 'mongodb' },
  ],
});
