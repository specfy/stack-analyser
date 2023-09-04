import { register } from '../../register.js';

register({
  tech: 'aws.amplify_hosting',
  name: 'AWS Amplify Hosting',
  type: 'hosting',
  dependencies: [
    { type: 'terraform.resource', name: 'aws_amplify_app' },
    { type: 'terraform.resource', name: 'aws_amplify_backend_environment' },
  ],
});
