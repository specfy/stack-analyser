import { register } from '../../../register.js';

register({
  tech: 'zig',
  name: 'Zig',
  type: 'language',
  extensions: ['.zig'],
  dependencies: [{ type: 'githubAction', name: 'goto-bus-stop/setup-zig' }],
});
