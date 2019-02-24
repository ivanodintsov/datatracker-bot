import API from '../api';
import R from 'ramda';
import getMessageData from '../helpers/getMessageData';

export const pinnedMessage = () => async msg => {
  const pinned_message = getMessageData(R.propOr(null, 'pinned_message', msg));
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
  await Promise.all([
    API.chat.update(msg.inputMessageData.chat, { pinned_message }),
  ]);
};
