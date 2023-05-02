import { register } from '../../rules';

register({
  tech: 'alibabacloud',
  dependencies: [
    { type: 'terraform', name: 'registry.terraform.io/aliyun/alicloud' },
  ],
});
