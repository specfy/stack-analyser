import { register } from '../../register.js';

register({
  tech: 'datocms',
  name: 'Dato CMS',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: 'datocms-structured-text-utils' },
    { type: 'npm', name: '@datocms/cma-client' },
    { type: 'npm', name: '@datocms/cma-client-node' },
    { type: 'npm', name: 'datocms-client' },
    { type: 'npm', name: '@datocms/cli' },
    { type: 'npm', name: 'vue-datocms' },
    { type: 'npm', name: 'react-datocms' },
    { type: 'npm', name: 'datocms-react-ui' },
    { type: 'npm', name: 'datocms-plugin-sdk' },
    { type: 'npm', name: 'gatsby-source-datocms' },
  ],
});
