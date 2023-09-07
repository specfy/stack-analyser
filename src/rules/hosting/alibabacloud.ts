import { register } from '../../register.js';

register({
  tech: 'alibabacloud',
  name: 'Alibaba Cloud',
  type: 'hosting',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/aliyun/alicloud' },
    { type: 'php', name: 'alibabacloud/sdk' },
    { type: 'php', name: 'alibabacloud/client' },
  ],
});
