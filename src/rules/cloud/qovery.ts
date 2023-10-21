import { register } from '../../register.js';

register({
  tech: 'qovery',
  name: 'Qovery',
  type: 'cloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/Qovery/qovery' },
    { type: 'npm', name: 'qovery-typescript-axios' },
    { type: 'npm', name: 'qovery/qovery-client-javascript' },
    { type: 'npm', name: 'qovery_api' },
    { type: 'npm', name: 'qovery-ws-typescript-axios' },
    { type: 'docker', name: 'public.ecr.aws/r3m4q3r9/qovery-cli' },
    { type: 'golang', name: 'github.com/qovery/qovery-client-go' },
    { type: 'githubAction', name: 'Qovery/qovery-action' },
  ],
});
