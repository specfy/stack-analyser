import { register } from '../../../rules.js';

import { detectNodeComponent } from './component.js';

register({
  tech: 'deno',
  files: ['deno.jsonc', 'deno.json', 'deno.lock'],
  dependencies: [
    { type: 'docker', name: /denoland\/deno/, example: 'denoland/deno:0.0.0' },
  ],
  detect: detectNodeComponent,
});
