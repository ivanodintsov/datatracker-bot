import API from '../api'
import getMessageData from '../helpers/getMessageData'
// import getStatisticsData from '../helpers/getStatisticsData'
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

export const supergroupChatCreated = bot =>
  async msg => {
    const msgData = getMessageData(msg)
    // const statsData = getStatisticsData(msgData)
    
    const chatInfo = await bot.getChat(msgData.chat)
    const members_count = await bot.getChatMembersCount(msgData.chat)
    
    await new Promise.all([
      API.chat.create({ ...chatInfo, members_count }),
      // API.chat.statistics.updateDaily(statsData)
    ])
  }

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.SUPERGROUP_CHAT_CREATED,
    msg,
  });
};
