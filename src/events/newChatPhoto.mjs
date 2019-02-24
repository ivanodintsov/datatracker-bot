import API from '../api'
import getMessageData from '../helpers/getMessageData'
// import getStatisticsData from '../helpers/getStatisticsData'
// import queue from '../queue/queue'

export const newChatPhoto = bot =>
  async msg => {
    const msgData = getMessageData(msg)
    // const statsData = getStatisticsData(msgData)

    await API.message.create(msgData)

    // queue
    //   .create('updateChatPhoto', msgData.chat)
    //   .attempts(3)
    //   .save()

    // await API.chat.statistics.updateDaily(statsData)
  }
