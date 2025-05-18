import { register } from '../../register.js';

register({
  tech: 'bundler',
  name: 'Bundler',
  type: 'package_manager',
  dependencies: [{ type: 'ruby', name: 'bundler' }],
});
