import { register } from '../../rules.js';

register({
  tech: 'azure.ci',
  files: ['azure-pipelines.yml', 'azure-pipelines.yaml'],
});
