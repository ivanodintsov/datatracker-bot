import R from 'ramda';
import { botConfig } from '../config';
import API from '../api';
import * as messages from '../messages';

export const getChatStatistics = R.curry(async (bot, msg) => {
  const data = await API.chat.statistics.chatStatistics(msg.chat.id);

  if (!data) {
    return bot.sendMessage(msg.chat.id, 'No data.');
  }

  return bot.sendMessage(
    msg.chat.id,
    messages.chatStatisticsMessage(msg, data),
    { parseMode: botConfig.parseMode }
  );
});
