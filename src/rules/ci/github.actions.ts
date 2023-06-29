import { register } from '../../rules.js';

register({
  tech: 'github.actions',
  matchFullPath: true,
  files: /.github\/workflows\/.+\.yml/,
  example: '.github/workflows/ci.yml',
});
