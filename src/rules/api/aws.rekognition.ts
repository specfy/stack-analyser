import { register } from '../../register.js';

register({
  tech: 'aws.rekognition',
  name: 'AWS Rekognition',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-rekognition' },
    { type: 'npm', name: '@aws-cdk/aws-rekognition' },
    { type: 'rust', name: 'aws-sdk-rekognition' },
    { type: 'ruby', name: 'aws-sdk-rekognition' },
    {
      type: 'golang',
      name: 'github.com/aws/aws-sdk-go-v2/service/rekognition',
    },
  ],
});
