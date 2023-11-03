import { register } from '../../../register.js';

import { detectRustComponent } from './component.js';

register({
  tech: 'rust',
  name: 'Rust',
  type: 'language',
  files: ['Cargo.toml'],
  extensions: ['.rs', '.rs.in'],
  dependencies: [
    { type: 'docker', name: 'rust' },
    { type: 'docker', name: 'cimg/rust' },
    { type: 'docker', name: 'circleci/rust' },
    { type: 'docker', name: 'rustlang/rust' },
  ],
  detect: [detectRustComponent],
});
