import { register } from '../../../register.js';

import { detectRustComponent } from './component.js';

register({
  tech: 'rust',
  name: 'Rust',
  type: 'language',
  files: ['Cargo.toml', 'main.go'],
  detect: [detectRustComponent],
});
