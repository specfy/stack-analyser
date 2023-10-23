import { register } from '../../register.js';

register({
  tech: 'sonarqube',
  name: 'SonarQube',
  type: 'tool',
  files: ['.sonar-project.properties'],
  dependencies: [{ type: 'docker', name: 'sonarqube' }],
});
