import API from '../api'
import getMessageData from '../helpers/getMessageData'
// import getStatisticsData from '../helpers/getStatisticsData'
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';
import Transformer from 'class-transformer';
import { Chat } from '../bot/models';

export const groupChatCreated = bot =>
  async msg => {
    const msgData = msg.inputMessageData
    // const statsData = getStatisticsData(msgData)
    
    const chatResponse = await bot.getChat(msgData.chat)
    const members_count = await bot.getChatMembersCount(msgData.chat)
    const chat = Transformer.plainToClass(Chat, chatResponse);

    await Promise.all([
      API.chat.create({ ...chat, members_count }),
      // API.chat.statistics.updateDaily(statsData)
    ])
  }

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.GROUP_CHAT_CREATED,
    msg,
  });
};
