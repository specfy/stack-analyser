import { register } from '../../register.js';

register({
  tech: 'denodeploy',
  name: 'Deno Deploy',
  type: 'hosting',
  dependencies: [
    { type: 'githubAction', name: 'denoland/deployctl' },
    {
      type: 'deno',
      name: /\/x\/deploy(@[0-9.]+)?\/deployctl.ts/,
      example: 'https://deno.land/x/deploy@1.4.07/deployctl.ts',
    },
  ],
});
