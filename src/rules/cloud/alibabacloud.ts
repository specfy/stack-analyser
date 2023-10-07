import { register } from '../../register.js';

register({
  tech: 'alibabacloud',
  name: 'Alibaba Cloud',
  type: 'cloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/aliyun/alicloud' },
    { type: 'php', name: 'alibabacloud/sdk' },
    { type: 'php', name: 'alibabacloud/client' },
    { type: 'githubAction', name: 'aliyun/acr-login' },
  ],
});
