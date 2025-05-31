import { register } from '../../register.js';

register({
  tech: 'docusign',
  name: 'Docusign',
  type: 'saas',
  dotenv: ['DOCUSIGN_'],
  dependencies: [
    { type: 'npm', name: 'docusign-esign' },
    { type: 'ruby', name: 'docusign_esign' },
    { type: 'php', name: 'docusign/esign-client' },
  ],
});
