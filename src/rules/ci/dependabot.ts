import { register } from '../../rules.js';

register({
  tech: 'dependabot',
  matchFullPath: true,
  files: /.github\/dependabot.yml/,
  example: '.github/dependabot.yml',
});
