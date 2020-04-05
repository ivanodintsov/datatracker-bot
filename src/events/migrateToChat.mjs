import API from '../api'
import getMessageData from '../helpers/getMessageData'
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

export const migrateToChat = bot => async msg => {  
  const { chat, migrate_to_chat_id } = msg
  const msgData = getMessageData(msg)
  
  const chatInfo = await bot.getChat(migrate_to_chat_id)

  await Promise.all([
    API.message.create(msgData),
    API.chat.migrate(chat.id, { id: chatInfo.id, type: chatInfo.type })
  ])
}

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.MIGRATE_TO_CHAT,
    msg,
  });
};
