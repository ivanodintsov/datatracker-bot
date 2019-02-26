import R from 'ramda';
import * as messages from '../messages';

export const getMemberLink = R.curry(async (bot, msg) => {
  return bot.sendMessage(
    msg.chat.id,
    messages.memberLinkMessage(msg)
  );
});
