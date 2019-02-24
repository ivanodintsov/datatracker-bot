import { botConfig } from './config';
import TeleBot from 'telebot';
import * as events from './events';
import * as commands from './commands';
import API from './api';
import restartOnFailtire from './helpers/restartOnFailture';
import { initEventList } from './helpers/initEvent';
import getMessageData from './helpers/getMessageData';

export const bot = new TeleBot(botConfig);

bot.mod('message', (data) => {
  data.message.inputMessageData = getMessageData(data.message);
  return data;
});

const start = async (bot, events) => {
  initEventList(bot, events);
  initEventList(bot, commands, { prefix: '/' });

  await restartOnFailtire({
    services: [ API.chat.all ],
    onSuccess: bot.start.bind(bot)
  });
};

start(bot, events);
