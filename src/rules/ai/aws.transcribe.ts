import { register } from '../../register.js';

register({
  tech: 'aws.transcribe',
  name: 'AWS Transcribe',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/middleware-sdk-transcribe-streaming' },
    { type: 'npm', name: '@aws-sdk/client-transcribe-streaming' },
    { type: 'npm', name: '@aws-sdk/client-transcribe' },
  ],
});
