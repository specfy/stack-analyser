import { register } from '../../register.js';

register({
  tech: 'openapi',
  name: 'OpenAPI',
  type: 'tool',
  files: ['openapi.yaml', 'openapi.json', 'openapi.yml'],
  dependencies: [
    { type: 'npm', name: 'openapi-types' },
    { type: 'npm', name: 'openapi3-ts' },
    { type: 'npm', name: '@asteasolutions/zod-to-openapi' },
    { type: 'npm', name: 'openapi-typescript' },
    { type: 'npm', name: '@apidevtools/swagger-parser' },
    { type: 'golang', name: 'github.com/go-openapi/runtime' },
    { type: 'golang', name: 'github.com/go-openapi/swag' },
    { type: 'php', name: 'swagger-api/swagger-ui' },
    { type: 'python', name: 'openapi' },
    { type: 'ruby', name: 'openapi_parser' },
    { type: 'rust', name: 'openapi' },
  ],
});
