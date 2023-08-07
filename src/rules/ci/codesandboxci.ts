import { register } from '../../register.js';

register({
  tech: 'codesandboxci',
  name: 'CodeSandboxCI',
  type: 'ci',
  matchFullPath: true,
  files: /.codesandbox\/ci.json/,
  example: '.codesandbox/ci.json',
});
