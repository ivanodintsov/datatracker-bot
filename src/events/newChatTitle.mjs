import API from '../api'
import getMessageData from '../helpers/getMessageData'
// import getStatisticsData from '../helpers/getStatisticsData'

export const newChatTitle = bot => async msg => {
  const msgData = getMessageData(msg)
  // const statsData = getStatisticsData(msgData)

  await API.message.create(msgData),
  
  await Promise.all([
    API.chat.update(msg.chat.id, { title: msg.new_chat_title }),
    // API.chat.statistics.updateDaily(statsData)
  ])
}
