import { register } from '../../rules';

register({
  tech: 'stylelint',
  files: [
    '.stylelint',
    '.stylelintrc.cjs',
    '.stylelintrc.json',
    '.stylelintrc.js',
  ],
});
