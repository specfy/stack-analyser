import { register } from '../../register.js';

register({
  tech: 'logstash',
  name: 'Logstash',
  type: 'etl',
  dependencies: [
    { type: 'docker', name: 'logstash' },
    { type: 'npm', name: 'bunyan-logstash-tcp' },
    { type: 'ruby', name: 'logstash-event' },
    { type: 'ruby', name: 'logstash-logger' },
    { type: 'ruby', name: 'logstash-output-sqs' },
    { type: 'ruby', name: 'logstash-filter-translate' },
    { type: 'ruby', name: 'logstash-output-stastd' },
    {
      type: 'golang',
      name: 'github.com/elastic/beats/libbeat/outputs/logstash',
    },
    { type: 'golang', name: 'github.com/bshuster-repo/logrus-logstash-hook' },
  ],
});
