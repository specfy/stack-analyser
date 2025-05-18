import { register } from '../../register.js';

register({
  tech: 'datadome',
  name: 'DataDome',
  type: 'security',
  dependencies: [
    { type: 'npm', name: '@datadome/fraud-sdk-node' },
    { type: 'npm', name: '@datadome/node-module' },
    { type: 'npm', name: '@datadome/react-native-datadome' },
    { type: 'npm', name: '@datadome/datadome-react-native-navigation' },
    { type: 'python', name: 'datadome-fraud-sdk-python' },
    { type: 'php', name: 'datadome/fraud-sdk-symfony' },
    { type: 'php', name: 'datadome/fraud-sdk-laravel' },
    { type: 'ruby', name: 'datadome_fraud_sdk_ruby' },
    { type: 'golang', name: 'github.com/datadome/fraud-sdk-go-package' },
    { type: 'php', name: 'DataDomeServiceProvider' },
  ],
});
