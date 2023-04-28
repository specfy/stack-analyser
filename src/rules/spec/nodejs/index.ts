import { register } from '../../../rules';

import { detectNodeComponent } from './component';

register({
  tech: 'nodejs',
  files: ['package.json', '.nvmrc'],
  dependencies: [{ type: 'docker', name: /nodejs/, example: 'nodejs:0.0.0' }],
  detect: detectNodeComponent,
});
