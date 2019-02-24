import API from '../api';

export const photo = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
