import API from '../api';

export const document = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
