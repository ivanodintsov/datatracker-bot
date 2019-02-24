import R from 'ramda';
import bugsnag from '../services/bugsnag';

export const initEvent = (bot, config) => (value, key) => {
  const { prefix = '', func = R.identity } = config;
  const event = `${prefix}${func(key)}`;
  const eventHandler = async (msg, ...args) => {
    try {
      if (msg.chat.type === 'channel') {
        return;
      }
  
      return await value(bot)(msg, ...args);
    } catch (error) {
      const chatId = R.path([ 'chat', 'id' ], msg);
      const fromId = R.path([ 'from', 'id' ], msg);

      bugsnag.notify(error, {
        event: {
          name: value && value.name,
          error
        },
        msg: {
          chatId,
          fromId
        },
        user: {
          id: fromId,
          chat: chatId
        }
      });
    }
  };
  bot.on(event, eventHandler);

  return { event, eventHandler };
};

export const initEventList = (bot, events, config = {}) => {
  const event = initEvent(bot, config);
  return R.forEachObjIndexed(event, events);
};
