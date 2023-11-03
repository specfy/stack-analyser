import { register } from '../../register.js';

register({
  tech: 'qdrant',
  name: 'Qdrant',
  type: 'db',
  dependencies: [
    { type: 'rust', name: 'qdrant-client' },
    { type: 'python', name: 'qdrant-client' },
    { type: 'docker', name: 'qdrant/qdrant' },
    { type: 'golang', name: 'github.com/qdrant/go-client' },
    { type: 'npm', name: '@qdrant/js-client-rest' },
    { type: 'npm', name: '@qdrant/drant-js' },
    { type: 'npm', name: '@qdrant/js-client-grpc' },
    { type: 'php', name: 'hkulekci/qdrant' },
    { type: 'php', name: 'qdrant-ruby' },
  ],
});
