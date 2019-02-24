import API from '../api';

export const audio = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
