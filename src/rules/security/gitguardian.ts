import { register } from '../../register.js';

register({
  tech: 'gitguardian',
  name: 'GitGuardian',
  type: 'security',
  dependencies: [
    { type: 'githubAction', name: 'GitGuardian/ggshield-action' },
    { type: 'golang', name: 'github.com/Gaardsholt/go-gitguardian' },
    { type: 'docker', name: 'gitguardian/ggshield' },
  ],
});
