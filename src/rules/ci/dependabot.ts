import { register } from '../../rules';

register({
  tech: 'dependabot',
  matchFullPath: true,
  files: /.github\/dependabot.yml/,
  example: '.github/dependabot.yml',
});
