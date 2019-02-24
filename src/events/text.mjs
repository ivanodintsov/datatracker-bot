import API from '../api';

export const text = () => async (msg) => {
  await API.message.process(msg.inputMessageData, msg.from, msg.chat);
};
