import { omit } from 'ramda'
import API from '../api'
import getMessageData from '../helpers/getMessageData'

const handler = bot => async msg => {
  const msgData = getMessageData(msg)
  await API.message.create(msgData)

  const [ chatInfo, members_count ] = await Promise.all([
    bot.getChat(msg.chat.id),
    bot.getChatMembersCount(msg.chat.id)
  ])
  const newChat = omit([ 'pinned_message', 'photo' ], chatInfo)
  
  await API.chat.create({ ...newChat, members_count })
}

export default handler
