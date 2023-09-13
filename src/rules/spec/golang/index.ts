import { register } from '../../../register.js';

import { detectGolangComponent } from './component.js';
import { detectGolangLockfile } from './lockfile.js';

register({
  tech: 'golang',
  name: 'Golang',
  type: 'language',
  files: ['go.mod', 'main.go'],
  detect: [detectGolangLockfile, detectGolangComponent],
  dependencies: [],
});
