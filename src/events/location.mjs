import API from '../api';

export const location = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
