import { register } from '../../register.js';

register({
  tech: 'aws.ec2',
  name: 'EC2',
  type: 'hosting',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-ec2' },
    { type: 'rust', name: 'aws-sdk-ec2' },
    { type: 'ruby', name: 'aws-sdk-ec2' },
  ],
});
