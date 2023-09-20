import { register } from '../../register.js';

register({
  tech: 'telegram',
  name: 'Telegram',
  type: 'saas',
  dependencies: [
    { type: 'docker', name: 'kasmweb/telegram' },
    {
      type: 'golang',
      name: 'github.com/go-telegram-bot-api/telegram-bot-api/v5',
    },
    { type: 'githubAction', name: 'appleboy/telegram-action' },
    { type: 'npm', name: 'telegram' },
    { type: 'npm', name: 'telegraf' },
    { type: 'npm', name: 'node-telegram-bot-api' },
    { type: 'npm', name: 'grammy' },
    { type: 'php', name: 'longman/telegram-bot' },
    { type: 'php', name: 'laravel-notification-channels/telegram' },
    { type: 'php', name: 'irazasyed/telegram-bot-sdk' },
    { type: 'php', name: 'telegram-bot/api' },
    { type: 'ruby', name: 'telegram-bot' },
    { type: 'ruby', name: 'telegram-bot-ruby' },
    { type: 'rust', name: 'teloxide' },
  ],
});
