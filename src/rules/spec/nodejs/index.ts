import { register } from '../../../rules.js';

import { detectNodeComponent } from './component.js';

register({
  tech: 'nodejs',
  files: ['package.json', '.nvmrc'],
  dependencies: [{ type: 'docker', name: /nodejs/, example: 'nodejs:0.0.0' }],
  detect: detectNodeComponent,
});
