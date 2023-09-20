import { register } from '../../register.js';

register({
  tech: 'sonarcloud',
  name: 'SonarCloud',
  type: 'ci',
  dependencies: [
    { type: 'githubAction', name: 'SonarSource/sonarcloud-github-actio' },
  ],
});
