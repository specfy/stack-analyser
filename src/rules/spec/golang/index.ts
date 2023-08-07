import { register } from '../../../rules.js';

import { detectGolangComponent } from './component.js';
import { detectGolangLockfile } from './lockfile.js';

register({
  tech: 'golang',
  files: ['go.mod', 'main.go'],
  detect: [detectGolangLockfile, detectGolangComponent],
});
