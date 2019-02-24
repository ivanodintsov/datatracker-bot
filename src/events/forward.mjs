import API from '../api';

export const forward = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
