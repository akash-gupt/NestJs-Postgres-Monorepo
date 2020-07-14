import { isProduction, isDevelopment } from '@gypsy/config';

const options = {
  disabled: false,
  interactive: false,
  logLevel: isProduction() ? 'warn' : 'info',
  types: {
    remind: {
      badge: '**',
      color: 'yellow',
      label: 'reminder',
      logLevel: 'debug',
    },
    warn: {
      badge: '⚠️',
    },
  },
};

const config = isDevelopment()
  ? { displayTimestamp: true, displayDate: true }
  : {};

export default {
  options,
  config,
};
