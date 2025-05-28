import { register } from '../../register.js';

register({
  tech: 'gcp',
  name: 'GCP',
  type: 'cloud',
  dependencies: [
    { type: 'npm', name: 'googleapis' },
    { type: 'npm', name: /^@google-cloud\//, example: '@google-cloud/' },
    { type: 'terraform', name: 'registry.terraform.io/hashicorp/google' },
    { type: 'php', name: 'google/cloud' },
    { type: 'githubAction', name: 'google-github-actions/auth' },
    { type: 'githubAction', name: 'google-github-actions/setup-gcloud' },
    { type: 'npm', name: '@pulumi/gcp' },
    { type: 'npm', name: 'google-auth-library' },
    { type: 'npm', name: 'passport-google-oauth20' },
    { type: 'npm', name: 'passport-google-oauth' },
  ],
});
