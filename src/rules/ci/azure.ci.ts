import { register } from '../../register.js';

register({
  tech: 'azure.ci',
  name: 'AzureCI',
  type: 'ci',
  files: ['azure-pipelines.yml', 'azure-pipelines.yaml'],
});
