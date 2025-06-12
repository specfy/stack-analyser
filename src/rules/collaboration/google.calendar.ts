import { register } from '../../register.js';

register({
  tech: 'google.calendar',
  name: 'Google Calendar',
  type: 'collaboration',
  dependencies: [
    { type: 'npm', name: '@googleapis/calendar' },
    { type: 'php', name: 'spatie/laravel-google-calendar' },
    { type: 'ruby', name: 'google-apis-calendar_v3' },
    { type: 'ruby', name: 'google_calendar' },
    { type: 'python', name: 'langchain-google-calendar-tools' },
  ],
});
