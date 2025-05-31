import { register } from '../../register.js';

register({
  tech: 'notion',
  name: 'Notion',
  type: 'collaboration',
  dotenv: ['NOTION_'],
  dependencies: [
    { type: 'npm', name: '@notionhq/client' },
    { type: 'npm', name: 'notion-to-md' },
    { type: 'php', name: 'fiveam-code/laravel-notion-api' },
    { type: 'ruby', name: 'notion-ruby-client' },
    { type: 'rust', name: 'notion' },
  ],
});
