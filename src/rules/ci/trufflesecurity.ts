import { register } from '../../register.js';

register({
  tech: 'trufflesecurity',
  name: 'Truffle Security',
  type: 'ci',
  files: ['.travis.yml', '.travis.yaml'],
  dependencies: [
    { type: 'docker', name: 'trufflesecurity/trufflehog' },
    { type: 'githubAction', name: 'trufflesecurity/trufflehog' },
  ],
});
