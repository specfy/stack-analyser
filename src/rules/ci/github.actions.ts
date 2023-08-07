import { register } from '../../register.js';

register({
  tech: 'github.actions',
  name: 'Github Actions',
  type: 'ci',
  matchFullPath: true,
  files: /.github\/workflows\/.+\.y(a)?ml/,
  example: '.github/workflows/ci.yml',
});
