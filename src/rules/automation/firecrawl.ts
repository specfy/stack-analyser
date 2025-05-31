import { register } from '../../register.js';

register({
  tech: 'firecrawl',
  name: 'Firecrawl',
  type: 'automation',
  dotenv: ['FIRECRAWL_'],
  dependencies: [
    { type: 'php', name: '@mendable/firecrawl-js' },
    { type: 'python', name: 'firecrawl-py' },
    { type: 'golang', name: 'github.com/mendableai/firecrawl-go' },
    { type: 'rust', name: 'firecrawl' },
  ],
});
