import API from '../api';
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

export const sticker = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.STICKER,
    msg,
  });
};
