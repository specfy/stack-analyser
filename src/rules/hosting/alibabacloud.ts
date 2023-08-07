import { register } from '../../register.js';

register({
  tech: 'alibabacloud',
  name: 'Alibaba Cloud',
  type: 'hosting',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/aliyun/alicloud' },
  ],
});
