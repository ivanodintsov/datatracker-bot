import API from '../api';

export const video = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
