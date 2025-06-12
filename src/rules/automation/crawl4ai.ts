import { register } from '../../register.js';

register({
  tech: 'crawl4ai',
  name: 'Crawl4AI',
  type: 'automation',
  dotenv: ['CRAWL4AI_'],
  dependencies: [
    { type: 'docker', name: 'unclecode/crawl4ai' },
    { type: 'python', name: 'crawl4ai' },
  ],
});
