import { register } from '../../rules.js';

register({
  tech: 'github.actions',
  matchFullPath: true,
  files: /.github\/workflows\/.+\.y(a)?ml/,
  example: '.github/workflows/ci.yml',
});
