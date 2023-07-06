import { register } from '../../rules.js';

register({
  tech: 'dependabot',
  matchFullPath: true,
  files: /.github\/dependabot.y(a)?ml/,
  example: '.github/dependabot.yml',
});
