import { register } from '../../rules.js';

register({
  tech: 'gcp.aiplatform',
  dependencies: [
    { type: 'npm', name: '@google-cloud/aiplatform' },
    { type: 'terraform.resource', name: 'google_vertex_ai_index' },
    {
      type: 'ruby',
      name: /^google-cloud-ai_platform/,
      example: 'google-cloud-ai_platform-v1',
    },
  ],
});
