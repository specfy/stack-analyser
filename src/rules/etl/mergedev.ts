import { register } from '../../register.js';

register({
  tech: 'mergedev',
  name: 'Merge.dev',
  type: 'etl',
  dependencies: [
    { type: 'npm', name: /^@mergeapi\//, example: '@mergeapi/merge-node-client' },
    { type: 'python', name: 'MergePythonClient' },
    { type: 'python', name: 'MergePythonSDK' },
    { type: 'golang', name: 'github.com/merge-api/merge-go-client' },
    { type: 'ruby', name: 'merge_ruby_client' },
    // { type: 'rust', name: /^@mergeapi\//, example: '@mergeapi/merge-hris-rust' },
    { type: 'php', name: /^merge-api\//, example: 'merge-api/merge-ats-php' },
  ],
});
