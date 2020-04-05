import API from '../api';
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

export const channelChatCreated = bot => async msg => {
  const chatInfo = await bot.getChat(msg.inputMessageData.chat);
  const members_count = await bot.getChatMembersCount(msg.inputMessageData.chat);
  
  await new Promise.all([
    API.chat.create({ ...chatInfo, members_count })
  ]);
};

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.CHANNEL_CHAT_CREATED,
    msg,
  });
};
