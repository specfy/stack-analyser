import { register } from '../../rules.js';

register({
  tech: 'githubactions',
  matchFullPath: true,
  files: /.github\/workflows\/.+\.yml/,
  example: '.github/workflows/ci.yml',
});
