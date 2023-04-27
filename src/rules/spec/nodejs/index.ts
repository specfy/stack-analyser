import { register } from '../../../rules';

import { detectNodeComponent } from './component';

register({
  tech: 'nodejs',
  files: ['package.json', '.nvmrc'],
  detect: detectNodeComponent,
});
