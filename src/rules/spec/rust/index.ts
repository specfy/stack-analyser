import { register } from '../../../rules.js';

import { detectRustComponent } from './component.js';

register({
  tech: 'rust',
  files: ['Cargo.toml', 'main.go'],
  detect: [detectRustComponent],
});
