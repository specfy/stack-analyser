import { register } from '../../register.js';

register({
  tech: 'gcp.artifactregistry',
  name: 'Cloud Artifact Registry',
  type: 'storage',
  dependencies: [
    { type: 'npm', name: '@google-cloud/artifact-registry' },
    { type: 'npm', name: 'google-artifactregistry-auth' },
    { type: 'golang', name: 'cloud.google.com/go/artifactregistry' },
    { type: 'ruby', name: 'google-cloud-artifact_registry' },
    {
      type: 'terraform.resource',
      name: /^google_artifact_/,
      example: 'google_artifact_registry_repository',
    },
  ],
});
