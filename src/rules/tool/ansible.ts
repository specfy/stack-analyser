import { register } from '../../register.js';

register({
  tech: 'ansible',
  name: 'Ansible',
  type: 'tool',
  dependencies: [
    { type: 'githubAction', name: 'ansible/ansible-lint' },
    { type: 'githubAction', name: 'ansible-community/ansible-test-gh-action' },
    { type: 'docker', name: 'pipelinecomponents/ansible-lint' },
    { type: 'docker', name: 'alpinelinux/ansible' },
  ],
});
