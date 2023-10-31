import { register } from '../../register.js';

register({
  tech: 'milvusdb',
  name: 'MilvusDB',
  type: 'db',
  dependencies: [
    { type: 'docker', name: 'milvusdb/milvus' },
    { type: 'docker', name: 'milvusdb/milvus-dev' },
    { type: 'docker', name: 'bitnami/milvus' },
    { type: 'docker', name: 'bitnamicharts/milvus' },
    { type: 'npm', name: '@zilliz/milvus2-sdk-node' },
    { type: 'golang', name: 'github.com/milvus-io/milvus-sdk-go/v2' },
  ],
});
