import { register } from '../../register.js';

register({
  tech: 'atlasgo',
  name: 'AtlasGo',
  type: 'tool',
  files: ['schema.hcl'],
  dependencies: [
    { type: 'docker', name: 'arigaio/atlas' },
    { type: 'githubAction', name: 'ariga/setup-atlas' },
    { type: 'githubAction', name: 'ariga/atlas-action/migrate/lint' },
    { type: 'githubAction', name: 'ariga/atlas-action/migrate/push' },
    { type: 'githubAction', name: 'ariga/atlas-action/migrate/apply' },
  ],
});
