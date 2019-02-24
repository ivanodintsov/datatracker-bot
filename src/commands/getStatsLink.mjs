import R from 'ramda';
import { siteUrl } from '../config';

export const getStatsLink = R.curry((bot, msg) => {
  bot.sendMessage(msg.chat.id, `${siteUrl}/chats/${msg.chat.id}`);
});
