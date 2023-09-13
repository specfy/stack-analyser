import { register } from '../../register.js';

register({
  tech: 'playwright',
  name: 'Playwright',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: 'playwright' },
    { type: 'githubAction', name: 'microsoft/playwright-github-action' },
    { type: 'docker', name: 'mcr.microsoft.com/playwright' },
    // { type: 'python', name: 'pytest-playwright' },
    // {type: 'dotnet', name: 'Microsoft.Playwright.NUnit'},
    // {type: 'java', name: 'com.microsoft.playwright.*'},
  ],
});
