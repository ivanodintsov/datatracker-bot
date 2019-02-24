import API from '../api';
import getMessageData from '../helpers/getMessageData';

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
