import { omit } from 'ramda'
import API from '../api'
import getMessageData from '../helpers/getMessageData'
import Transformer from 'class-transformer';
import { Chat } from '../bot/models';

const handler = bot => async msg => {
  const msgData = msg.inputMessageData;
  await API.message.create(msgData);

  const [ chatResponse, members_count ] = await Promise.all([
    bot.getChat(msg.chat.id),
    bot.getChatMembersCount(msg.chat.id)
  ])

  const chat = Transformer.plainToClass(Chat, chatResponse);
  
  await API.chat.create({ ...chat, members_count })
}

export default handler
