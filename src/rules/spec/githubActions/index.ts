import { register } from '../../../register.js';

import { FILE_REG, detectGithubActionsComponent } from './component.js';

register({
  tech: 'github.actions',
  name: 'Github Actions',
  type: 'ci',
  matchFullPath: true,
  files: FILE_REG,
  example: '.github/workflows/ci.yml',
  detect: detectGithubActionsComponent,
});
