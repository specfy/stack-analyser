import { register } from '../../register.js';

register({
  tech: 'sonarqube',
  name: 'SonarQube',
  type: 'ci',
  files: ['.sonar-project.properties'],
  dependencies: [{ type: 'docker', name: 'sonarqube' }],
});
