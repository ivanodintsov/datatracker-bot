import API from '../api'
import getMessageData from '../helpers/getMessageData'
// import getStatisticsData from '../helpers/getStatisticsData'
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

export const newChatTitle = bot => async msg => {
  const msgData = getMessageData(msg)
  // const statsData = getStatisticsData(msgData)

  await API.message.create(msgData),
  
  await Promise.all([
    API.chat.update(msg.chat.id, { title: msg.new_chat_title }),
    // API.chat.statistics.updateDaily(statsData)
  ])
}

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.NEW_CHAT_TITLE,
    msg,
  });
};
