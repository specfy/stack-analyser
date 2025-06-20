import { register } from '../../register.js';

register({
  tech: 'antd',
  name: 'Ant Design',
  type: 'ui',
  dependencies: [
    { type: 'npm', name: 'antd' },
    { type: 'npm', name: 'ant-design-vue' },
  ],
});
