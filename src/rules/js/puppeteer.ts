import { register } from '../../register.js';

register({
  tech: 'puppeteer',
  name: 'Puppeteer',
  type: 'tool',
  dependencies: [{ type: 'npm', name: 'puppeteer' }],
});
