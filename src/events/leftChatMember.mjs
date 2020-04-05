import API from '../api';
import getMessageData from '../helpers/getMessageData';
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

export const leftChatMember = () => async msg => {
  const msgData = getMessageData(msg);
  await API.message.create(msgData);

  // await API.chat.statistics.updateDaily({
  //   chat: msgData.chat,
  //   from: msgData.from,
  //   date: msgData.date,
  //   left_chat_member: 1,
  //   reply: isReply(msg),
  //   total: 1
  // })

  // await API.user.left(msg.chat.id)
};

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.LEFT_CHAT_MEMBER,
    msg,
  });
};
