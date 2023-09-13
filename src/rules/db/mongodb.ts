import { register } from '../../register.js';

register({
  tech: 'mongodb',
  name: 'MongoDB',
  type: 'db',
  dependencies: [
    { type: 'npm', name: /mongoose/, example: 'mongoose' },
    { type: 'npm', name: /mongodb/, example: '@mikro-orm/mongodb' },
    { type: 'docker', name: /mongo/, example: 'mongo:0.0.0' },
    { type: 'rust', name: 'mongodb' },
    { type: 'ruby', name: 'mongo' },
    { type: 'php', name: 'mongodb/mongodb' },
  ],
});
