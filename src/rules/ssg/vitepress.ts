import { register } from '../../register.js';

register({
  tech: 'vitepress',
  name: 'VitePress',
  type: 'ssg',
  files: ['.vitepress'],
  dependencies: [{ type: 'npm', name: 'vitepress' }],
});
