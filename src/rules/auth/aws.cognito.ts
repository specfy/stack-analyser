import { register } from '../../register.js';

register({
  tech: 'aws.cognito',
  name: 'AWS Cognito',
  type: 'auth',
  dependencies: [
    { type: 'golang', name: 'github.com/aws/aws-sdk-go-v2/service/cognitoidentityprovider' },
    { type: 'npm', name: '@aws-sdk/client-cognito-identity-provider' },
    { type: 'ruby', name: 'aws-sdk-cognitoidentityprovider' },
  ],
});
