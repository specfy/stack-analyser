import { register } from '../../../register.js';

import { detectDenoLockfile } from './lockfile.js';

register({
  tech: 'deno',
  name: 'Deno',
  type: 'language',
  files: ['deno.jsonc', 'deno.json', 'deno.lock'],
  dependencies: [
    { type: 'docker', name: /denoland\/deno/, example: 'denoland/deno:0.0.0' },
    { type: 'githubAction', name: 'denoland/setup-deno' },
  ],
  detect: detectDenoLockfile,
});
