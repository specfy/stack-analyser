import { register } from '../../../register.js';

import { detectNodeComponent } from './component.js';

register({
  tech: 'nodejs',
  name: 'NodeJS',
  type: 'language',
  files: ['package.json', '.nvmrc'],
  dependencies: [{ type: 'docker', name: /nodejs/, example: 'nodejs:0.0.0' }],
  detect: detectNodeComponent,
});
