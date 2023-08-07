import { register } from '../../register.js';

register({
  tech: 'jenkins',
  name: 'Jenkins',
  type: 'ci',
  files: ['.jenkins'],
  dependencies: [
    { type: 'docker', name: /jenkins-docker/, example: 'jenkins-docker:0.0.0' },
    { type: 'ruby', name: 'jenkins_api_client' },
  ],
});
