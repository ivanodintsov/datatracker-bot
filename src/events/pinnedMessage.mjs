import API from '../api';
import R from 'ramda';
import getMessageData from '../helpers/getMessageData';
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

export const pinnedMessage = () => async msg => {
  const pinned_message = getMessageData(R.propOr(null, 'pinned_message', msg));
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
  await Promise.all([
    API.chat.update(msg.inputMessageData.chat, { pinned_message }),
  ]);
};

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.PINNED_MESSAGE,
    msg,
  });
};
