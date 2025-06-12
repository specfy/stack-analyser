import { register } from '../../register.js';

register({
  tech: 'jsonschema',
  name: 'JSON Schema',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: '@types/json-schema' },
    { type: 'npm', name: 'json-schema' },
    { type: 'npm', name: 'jsonschema' },
    { type: 'npm', name: 'ajv' },
    { type: 'php', name: 'justinrainbow/json-schema' },
    { type: 'php', name: 'opis/json-schema' },
    { type: 'golang', name: 'github.com/invopop/jsonschema' },
    { type: 'python', name: 'jsonschema' },
    { type: 'ruby', name: 'json-schema' },
    { type: 'rust', name: 'jsonschema' },
  ],
});
