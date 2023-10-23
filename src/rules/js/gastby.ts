import { register } from '../../register.js';

register({
  tech: 'gatsby',
  name: 'Gatsby',
  type: 'tool',
  files: ['gatsby-config.js', 'gatsby-config.ts'],
  dependencies: [
    { type: 'npm', name: 'gatsby' },
    { type: 'npm', name: 'gatsby-cli' },
    { type: 'npm', name: 'gatsby-core-utils' },
    { type: 'npm', name: '@gatsbyjs/reach-router' },
    { type: 'npm', name: '@netlify/plugin-gatsby' },
    { type: 'npm', name: '@vercel/gatsby-plugin-vercel-builder' },
    { type: 'npm', name: '@vercel/gatsby-plugin-vercel-analytics' },
    { type: 'githubAction', name: 'enriikke/gatsby-gh-pages-action' },
    { type: 'githubAction', name: 'jzweifel/gatsby-cli-github-action' },
    { type: 'githubAction', name: 'jonelantha/gatsby-s3-action' },
  ],
});
