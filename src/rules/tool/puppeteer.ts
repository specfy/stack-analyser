import { register } from '../../register.js';

register({
  tech: 'puppeteer',
  name: 'Puppeteer',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'puppeteer' },
    { type: 'npm', name: 'puppeteer-core' },
    { type: 'npm', name: '@puppeteer/browser' },
    { type: 'docker', name: 'itisfoundation/puppeteer' },
  ],
});
