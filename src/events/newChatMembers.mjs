import R from 'ramda';
import { findMyBot } from '../helpers/findBot';
import API from '../api';
import getMessageData from '../helpers/getMessageData';
import bugsnag from '../services/bugsnag';
import messageQueue from '../jobs/messagesQueue';
import TYPES from '../jobs/types';

const createUser = (bot, chat) => async user => {
  try {
    const member = await bot.getChatMember(chat, user.id);
  
    await Promise.all([
      API.user.create(member.user),
      API.chat.newMember({ ...member, user: member.user.id, chat })
    ]);
  } catch (error) {
    bugsnag.notify(error, {
      queue: {
        name: 'createUser',
        user: {
          id: user
        },
        error
      }
    });
  }
};

export const newChatMembers = (bot) => async msg => {
  const chatInfo = await bot.getChat(msg.chat.id);
  const myBot = findMyBot(msg.new_chat_members);
  const msgData = getMessageData(msg);
  const createChatUser = createUser(bot, msgData.chat);

  await API.message.create(msgData);

  if (myBot) {
    const newChat = R.omit([ 'pinned_message', 'photo' ], chatInfo);
    const members_count = await bot.getChatMembersCount(newChat.id);
    await API.chat.create({ ...newChat, members_count });

    // Fetch Admins
    const admins = await bot.getChatAdministrators(msgData.chat);
    const adminsInput = R.map(R.prop('user'), admins);

    R.forEach(createChatUser, adminsInput);
  }

  R.forEach(createChatUser, msg.new_chat_members);
};

export const addToQueue = () => (msg) => {
  messageQueue.add({
    type: TYPES.NEW_CHAT_MEMBER,
    msg,
  });
};
