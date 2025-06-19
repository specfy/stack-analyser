import { register } from '../../register.js';

register({
  tech: 'vuepress',
  name: 'VuePress',
  type: 'ssg',
  files: ['.vuepress'],
  dependencies: [
    { type: 'npm', name: 'vuepress' },
    { type: 'npm', name: '@vuepress/core' },
  ],
});
