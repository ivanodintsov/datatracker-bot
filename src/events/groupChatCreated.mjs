import API from '../api'
import getMessageData from '../helpers/getMessageData'
// import getStatisticsData from '../helpers/getStatisticsData'

export const groupChatCreated = bot =>
  async msg => {
    const msgData = getMessageData(msg)
    // const statsData = getStatisticsData(msgData)
    
    const chatInfo = await bot.getChat(msgData.chat)
    const members_count = await bot.getChatMembersCount(msgData.chat)
    
    await Promise.all([
      API.chat.create({ ...chatInfo, members_count }),
      // API.chat.statistics.updateDaily(statsData)
    ])
  }
