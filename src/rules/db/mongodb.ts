import { register } from '../../register.js';

register({
  tech: 'mongodb',
  name: 'MongoDB',
  type: 'db',
  dependencies: [
    { type: 'npm', name: /mongoose/, example: 'mongoose' },
    { type: 'npm', name: /mongodb/, example: '@mikro-orm/mongodb' },
    { type: 'npm', name: '@opentelemetry/instrumentation-mongodb' },
    { type: 'npm', name: '@opentelemetry/instrumentation-mongoose' },
    { type: 'docker', name: 'mongo' },
    { type: 'docker', name: 'mongodb/mongodb-community-server' },
    { type: 'docker', name: 'mongodb/mongodb-enterprise-server' },
    { type: 'docker', name: 'bitnami/mongodb' },
    { type: 'docker', name: 'mongodb/atlas' },
    { type: 'docker', name: 'bitnami/mongodb-sharded' },
    { type: 'docker', name: 'rapidfort/mongodb' },
    { type: 'docker', name: 'circleci/mongo' },
    { type: 'rust', name: 'mongodb' },
    { type: 'ruby', name: 'mongo' },
    { type: 'php', name: 'mongodb/mongodb' },
  ],
});
