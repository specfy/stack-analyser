import { register } from '../../register.js';

register({
  tech: 'sitecore.xmlcloud',
  name: 'Sitecore XM cloud',
  type: 'api',
  dependencies: [
    {
      type: 'npm',
      name: /^@sitecore-jss\/sitecore-jss/,
      example: '@sitecore-jss/sitecore-jss-nextjs',
    },
  ],
});
