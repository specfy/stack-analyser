import { register } from '../../register.js';

register({
  tech: 'questdb',
  name: 'QuestDB',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'questdb/questdb' },
    { type: 'npm', name: '@questdb/nodejs-client' },
    { type: 'golang', name: 'github.com/questdb/go-questdb-client' },
    { type: 'rust', name: 'questdb-rs' },
  ],
});
