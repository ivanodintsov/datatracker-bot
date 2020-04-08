import API from '../api';
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';
import Transformer from 'class-transformer';
import { Chat, User } from '../bot/models';

export const channelChatCreated = bot => async msg => {
  const msgData = msg.inputMessageData
  // const statsData = getStatisticsData(msgData)
  
  const chatResponse = await bot.getChat(msgData.chat)
  const members_count = await bot.getChatMembersCount(msgData.chat)
  const chat = Transformer.plainToClass(Chat, chatResponse);

  await Promise.all([
    API.chat.create({ ...chat, members_count }),
    // API.chat.statistics.updateDaily(statsData)
  ])
};

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.CHANNEL_CHAT_CREATED,
    msg,
  });
};
