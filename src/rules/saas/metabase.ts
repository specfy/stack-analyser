import { register } from '../../register.js';

register({
  tech: 'metabase',
  name: 'Metabase',
  type: 'saas',
  dependencies: [
    { type: 'npm', name: '@metabase/embedding-sdk-react' },
    { type: 'docker', name: 'metabase/metabase' },
  ],
});
