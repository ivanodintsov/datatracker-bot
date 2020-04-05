import API from '../api';
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

export const voice = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.VOICE,
    msg,
  });
};
