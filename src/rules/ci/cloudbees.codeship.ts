import { register } from '../../register.js';

register({
  tech: 'cloudbees.codeship',
  name: 'CloudBees Codeship',
  type: 'ci',
  files: ['codeship-services.yml'],
});
