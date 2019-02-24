import API from '../api';

export const invoice = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
