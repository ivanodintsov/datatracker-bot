import R from 'ramda';

export const messageTypes = [
  'text',
  'audio',
  'sticker',
  'voice',
  'document',
  'photo',
  'video',
  'video_note',
  'location',
  'venue',
  'game',
  'pinned',
  'invoice',
  'contact',
  'channel_chat_created',
  'supergroup_chat_created',
  'group_chat_created',
  'migrate_to_chat',
  'left_chat_member',
  'new_chat_members',
  'new_chat_photo',
  'new_chat_title'
];

const getMessageType = R.pipe(
  mag => R.has(R.__, mag),
  R.find(R.__, messageTypes)
);

export default getMessageType;
