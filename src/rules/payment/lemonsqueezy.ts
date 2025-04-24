import { register } from '../../register.js';

register({
  tech: 'lemonsqueezy',
  name: 'Lemon Squeezy',
  type: 'payment',
  dependencies: [
    { type: 'npm', name: 'lemonsqueezy.ts' },
    { type: 'ruby', name: 'lemonsqueezy' },
    { type: 'golang', name: 'github.com/NdoleStudio/lemonsqueezy-go' },
    { type: 'php', name: 'lemonsqueezy/laravel' },
  ],
});
