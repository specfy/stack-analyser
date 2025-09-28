import { register } from '../../register.js';

register({
  tech: 'segment',
  name: 'Segment',
  type: 'analytics',
  dotenv: ['SEGMENT_'],
  dependencies: [
    { type: 'npm', name: 'analytics-node' },
    { type: 'npm', name: /^@segment\//, example: '@segment/analytics-node' },
    { type: 'python', name: 'analytics-python' },
    { type: 'ruby', name: 'segment-analytics' },
    { type: 'php', name: 'segmentio/analytics-php' },
    { type: 'golang', name: 'github.com/segmentio/analytics-go' },
    { type: 'npm', name: '@analytics/segment' },
  ],
});
