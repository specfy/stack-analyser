import { register } from '../../register.js';

register({
  tech: 'aws.ses',
  name: 'AWS Simple Email Service',
  type: 'messaging',
  dependencies: [
    { type: 'npm', name: '@aws-cdk/aws-ses' },
    { type: 'npm', name: 'aws-ses-v2-local' },
    { type: 'npm', name: 'nodemailer-ses-transport' },
    { type: 'npm', name: '@aws-sdk/client-ses' },
    { type: 'rust', name: 'aws-sdk-ses' },
    { type: 'rust', name: 'aws-sdk-sesv2' },
    { type: 'ruby', name: 'aws-ses' },
    { type: 'ruby', name: 'aws-sdk-ses' },
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/ses' },
    {
      type: 'terraform.resource',
      name: /^aws_ses/,
      example: 'aws_ses_queue',
    },
    { type: 'php', name: 'async-aws/ses' },
  ],
});
