import API from '../api';

export const sticker = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
