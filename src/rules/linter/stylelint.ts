import { register } from '../../register.js';

register({
  tech: 'stylelint',
  name: 'Stylelint',
  type: 'linter',
  files: ['.stylelint', '.stylelintrc.cjs', '.stylelintrc.json', '.stylelintrc.js'],
});
