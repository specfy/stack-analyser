import { register } from '../../register.js';

register({
  tech: 'tencentcloud',
  name: 'Tencent Cloud',
  type: 'hosting',
  dependencies: [
    {
      type: 'terraform',
      name: 'registry.terraform.io/tencentcloudstack/tencentcloud',
    },
    { type: 'php', name: 'encentcloud/tencentcloud-sdk-php' },
  ],
});
