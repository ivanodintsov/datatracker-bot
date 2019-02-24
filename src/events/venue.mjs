import API from '../api';

export const venue = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
