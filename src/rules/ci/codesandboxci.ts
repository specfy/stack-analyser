import { register } from '../../rules';

register({
  tech: 'codesandboxci',
  matchFullPath: true,
  files: /.codesandbox\/ci.json/,
  example: '.codesandbox/ci.json',
});
