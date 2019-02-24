import API from '../api';

export const videoNote = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
