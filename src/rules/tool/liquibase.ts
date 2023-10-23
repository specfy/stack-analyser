import { register } from '../../register.js';

register({
  tech: 'liquibase',
  name: 'Liquibase',
  type: 'tool',
  dependencies: [
    { type: 'docker', name: 'liquibase/liquibase' },
    { type: 'docker', name: 'webdevops/liquibase' },
    { type: 'githubAction', name: 'liquibase/liquibase-github-action' },
    { type: 'githubAction', name: 'liquibase-github-actions/init-start-h2' },
    { type: 'githubAction', name: 'liquibase-github-actions/update' },
  ],
});
