import API from '../api';

export const contact = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
