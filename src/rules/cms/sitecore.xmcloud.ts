import { register } from '../../register.js';

register({
  tech: 'sitecore.xmlcloud',
  name: 'Sitecore XM cloud',
  type: 'cms',
  dependencies: [
    {
      type: 'npm',
      name: /^@sitecore-jss\/sitecore-jss/,
      example: '@sitecore-jss/sitecore-jss-nextjs',
    },
  ],
});
