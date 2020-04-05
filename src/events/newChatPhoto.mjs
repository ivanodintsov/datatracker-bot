import API from '../api'
import getMessageData from '../helpers/getMessageData'
// import getStatisticsData from '../helpers/getStatisticsData'
// import queue from '../queue/queue'
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

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

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.NEW_CHAT_PHOTO,
    msg,
  });
};
