import TeleBot from 'telebot';
import Transformer from 'class-transformer';
import { Message } from '../bot/models';
import { botConfig } from '../config';
import getMessageData from '../helpers/getMessageData';
import * as events from '../events';
import * as commands from '../commands';
import API from '../api';
import restartOnFailtire from '../helpers/restartOnFailture';
import { initEventList } from '../helpers/initEvent';

const bot = new TeleBot(botConfig);

bot.mod('message', (data) => {
  const message = getMessageData(data.message);
  data.message.inputMessageData = Transformer.plainToClass(Message, message);

  console.log(data.message.inputMessageData);
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

export default bot;
