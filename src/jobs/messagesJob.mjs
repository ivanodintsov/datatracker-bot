import R from 'ramda';
import messageQueue from './messagesQueue';
import TYPES from './types';
import bot from '../services/bot';
import { text as textHandler} from '../events/text';
import { forward as forwardHandler } from '../events/forward';
import { audio } from '../events/audio';
import { voice } from '../events/voice';
import { document } from '../events/document';
import { photo } from '../events/photo';
import { sticker } from '../events/sticker';
import { video } from '../events/video';
import { videoNote } from '../events/videoNote';
import { contact } from '../events/contact';
import { location } from '../events/location';
import { venue } from '../events/venue';
import { game } from '../events/game';
import { invoice } from '../events/invoice';
import { newChatMembers } from '../events/newChatMembers';
import { groupChatCreated } from '../events/groupChatCreated';
import { channelChatCreated } from '../events/channelChatCreated';
import { supergroupChatCreated } from '../events/supergroupChatCreated';
import { migrateToChat } from '../events/migrateToChat';
import { edit } from '../events/edit';
import { newChatTitle } from '../events/newChatTitle';
import { newChatPhoto } from '../events/newChatPhoto';
import { pinnedMessage } from '../events/pinnedMessage';
import { leftChatMember } from '../events/leftChatMember';


const HANDLERS = {
  [TYPES.TEXT]: textHandler,
  [TYPES.FORWARD]: forwardHandler,
  [TYPES.AUDIO]: audio,
  [TYPES.VOICE]: voice,
  [TYPES.DOCUMENT]: document,
  [TYPES.PHOTO]: photo,
  [TYPES.STICKER]: sticker,
  [TYPES.VIDEO]: video,
  [TYPES.VIDEONOTE]: videoNote,
  [TYPES.CONTACT]: contact,
  [TYPES.LOCATION]: location,
  [TYPES.VENUE]: venue,
  [TYPES.GAME]: game,
  [TYPES.INVOICE]: invoice,
  [TYPES.NEW_CHAT_MEMBER]: newChatMembers,
  [TYPES.GROUP_CHAT_CREATED]: groupChatCreated,
  [TYPES.CHANNEL_CHAT_CREATED]: channelChatCreated,
  [TYPES.SUPERGROUP_CHAT_CREATED]: supergroupChatCreated,
  [TYPES.MIGRATE_TO_CHAT]: migrateToChat,
  [TYPES.EDIT]: edit,
  [TYPES.NEW_CHAT_TITLE]: newChatTitle,
  [TYPES.NEW_CHAT_PHOTO]: newChatPhoto,
  [TYPES.PINNED_MESSAGE]: pinnedMessage,
  [TYPES.LEFT_CHAT_MEMBER]: leftChatMember,
};

messageQueue.process(5, async  function (job) {
  const handler = R.prop(job.data.type, HANDLERS);

  if (!handler) {
    return Promise.resolve({ status: 'NO_HANDLER' });
  }

  await handler(bot)(job.data.msg);

  return Promise.resolve({ status: 'SUCCESS' });
});
