import { register } from '../../register.js';

register({
  tech: 'gcp.aiplatform',
  name: 'Cloud AI Platform',
  type: 'api',
  dependencies: [
    { type: 'npm', name: '@google-cloud/aiplatform' },
    {
      type: 'terraform.resource',
      name: /^google_vertex_/,
      example: 'google_vertex_ai_dataset',
    },
    {
      type: 'ruby',
      name: /^google-cloud-ai_platform/,
      example: 'google-cloud-ai_platform-v1',
    },
    { type: 'golang', name: 'cloud.google.com/go/aiplatform' },
    { type: 'php', name: 'google/cloud-ai-platform' },
  ],
});
