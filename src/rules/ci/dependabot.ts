import { register } from '../../register.js';

register({
  tech: 'dependabot',
  name: 'Dependabot',
  type: 'ci',
  matchFullPath: true,
  files: /.github\/dependabot.y(a)?ml/,
  example: '.github/dependabot.yml',
  dependencies: [
    { type: 'ruby', name: /^dependabot-/, example: 'dependabot-common' },
    { type: 'githubAction', name: 'ahmadnassri/action-dependabot-auto-merge' },
  ],
});
