import R from 'ramda';
import { messageTypes } from './getMessageType';

const getBaseMessageData = R.pick([
  ...messageTypes,
  'message_id',
  'date',
  'forward_from_message_id',
  'forward_signature',
  'forward_date',
  'entities',
  'caption_entities',
  'edit_date',
  'media_group_id',
  'author_signature',
  'caption',
  'delete_chat_photo',
  'migrate_to_chat_id',
  'migrate_from_chat_id',
  'connected_website',
  'pinned_message'
]);

export default getBaseMessageData;
