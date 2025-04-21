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
    { type: 'python', name: 'pymilvus' },
    { type: 'python', name: 'langchain-milvus' },
    { type: 'npm', name: 'genkitx-milvus' },
    { type: 'npm', name: '@llamaindex/milvus' },
  ],
});
