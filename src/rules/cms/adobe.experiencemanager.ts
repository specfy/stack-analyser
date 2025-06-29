import { register } from '../../register.js';

register({
  tech: 'adobe.experiencemanager',
  name: 'Adobe Experience Manager',
  type: 'cms',
  dotenv: ['AEM_'],
  dependencies: [{ type: 'npm', name: 'aemsync' }],
});
