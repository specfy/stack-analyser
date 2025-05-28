import { register } from '../../register.js';

register({
  tech: 'gcp.vertex',
  name: 'Vertex AI',
  type: 'ai',
  dependencies: [
    { type: 'npm', name: '@ai-sdk/google-vertex' },
    { type: 'npm', name: '@google-cloud/vertexai' },
    { type: 'npm', name: '@langchain/google-vertexai' },
  ],
});
