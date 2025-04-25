import { register } from '../../register.js';

register({
  tech: 'pulumi',
  name: 'Pulumi',
  type: 'tool',
  files: ['Pulumi.yaml'],
  dependencies: [
    { type: 'npm', name: '@pulumi/pulumi' },
    { type: 'python', name: 'pulumi' },
    { type: 'golang', name: 'github.com/pulumi/pulumi/sdk/v3' },
  ],
});
