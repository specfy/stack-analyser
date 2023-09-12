import { register } from '../../register.js';

register({
  tech: 'yousign',
  name: 'Yousign',
  type: 'saas',
  dependencies: [{ type: 'php', name: 'androk/yousign-api' }],
});
