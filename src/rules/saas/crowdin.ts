import { register } from '../../register.js';

register({
  tech: 'crowdin',
  name: 'Crowdin',
  type: 'saas',
  files: ['crowdin.yml', 'crowdin.yaml'],
  dependencies: [
    {
      type: 'npm',
      name: /^@crowdin\//,
      example: '@crowdin/crowdin-api-client',
    },
    { type: 'php', name: 'crowdin/crowdin-api-client' },
  ],
});
