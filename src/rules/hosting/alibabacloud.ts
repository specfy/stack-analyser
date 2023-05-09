import { register } from '../../rules.js';

register({
  tech: 'alibabacloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/aliyun/alicloud' },
  ],
});
