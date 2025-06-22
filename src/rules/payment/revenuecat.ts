import { register } from '../../register.js';

register({
  tech: 'revenuecat',
  name: 'RevenueCat',
  type: 'payment',
  dotenv: ['REVENUECAT_'],
  dependencies: [
    { type: 'npm', name: /^@revenuecat\//, example: '@revenuecat/react-native-purchases' },
  ],
});
