import { register } from '../../rules.js';

register({
  tech: 'jenkins',
  files: ['.jenkins'],
  dependencies: [
    { type: 'docker', name: /jenkins-docker/, example: 'jenkins-docker:0.0.0' },
  ],
});
