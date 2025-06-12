import { register } from '../../register.js';

register({
  tech: 'mcp',
  name: 'MCP',
  type: 'tool',
  dependencies: [
    { type: 'npm', name: '@modelcontextprotocol/sdk' },
    { type: 'python', name: 'mcp' },
    { type: 'ruby', name: 'mcp' },
  ],
});
