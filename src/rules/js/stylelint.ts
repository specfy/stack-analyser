import { register } from '../../rules.js';

register({
  tech: 'stylelint',
  files: [
    '.stylelint',
    '.stylelintrc.cjs',
    '.stylelintrc.json',
    '.stylelintrc.js',
  ],
});
