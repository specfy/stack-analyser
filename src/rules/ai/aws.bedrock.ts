import { register } from '../../register.js';

register({
  tech: 'aws.bedrock',
  name: 'AWS Bedrock',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@aws-sdk/client-bedrock' },
    { type: 'npm', name: '@aws-sdk/client-bedrock-runtime' },
    { type: 'npm', name: '@aws-sdk/client-bedrock-agent-runtime' },
    { type: 'npm', name: '@ai-sdk/amazon-bedrock' },
    { type: 'npm', name: '@anthropic-ai/bedrock-sdk' },
  ],
});
