import API from '../api';

export const channelChatCreated = bot => async msg => {
  const chatInfo = await bot.getChat(msg.inputMessageData.chat);
  const members_count = await bot.getChatMembersCount(msg.inputMessageData.chat);
  
  await new Promise.all([
    API.chat.create({ ...chatInfo, members_count })
  ]);
};
