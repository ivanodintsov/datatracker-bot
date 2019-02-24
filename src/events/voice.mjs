import API from '../api';

export const voice = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
