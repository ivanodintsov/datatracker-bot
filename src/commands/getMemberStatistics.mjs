import R from 'ramda';
import { botConfig } from '../config';
import API from '../api';
import * as messages from '../messages';

export const getMemberStatistics = R.curry(async (bot, msg) => {
  const data = await API.chat.memberStatistics(msg.chat.id, msg.from.id);

  if (!data) {
    return bot.sendMessage(msg.chat.id, 'No data.');
  }

  return bot.sendMessage(
    msg.chat.id,
    messages.memberStatisticsMessage(msg, data),
    { parseMode: botConfig.parseMode }
  );
});
