import API from '../api';

export const game = () => async msg => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
