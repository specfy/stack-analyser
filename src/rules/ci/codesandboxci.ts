import { register } from '../../rules.js';

register({
  tech: 'codesandboxci',
  matchFullPath: true,
  files: /.codesandbox\/ci.json/,
  example: '.codesandbox/ci.json',
});
