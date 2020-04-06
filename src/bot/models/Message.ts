import 'reflect-metadata';
import { plainToClass, Exclude, Type, Expose } from 'class-transformer';
import MessageEntity from './MessageEntity';
import User from './User';
import Audio from './Audio';
import PhotoSize from './PhotoSize';
import Document from './Document';
import MessageSticker from './MessageSticker';
import Video from './Video';
import Voice from './Voice';
import Game from './Game';
import Contact from './Contact';
import Location from './Location';
import Venue from './Venue';
import Invoice from './Invoice';
import VideoNote from './VideoNote';

@Exclude()
export class Message {
  @Expose()
  @Type(() => Number)
  message_id: number;

  @Expose()
  @Type(() => Number)
  from: number;

  @Expose()
  @Type(() => String)
  date: string;

  @Expose()
  @Type(() => Number)
  chat: number;

  @Expose()
  @Type(() => Number)
  forward_from: number;

  @Expose()
  @Type(() => Number)
  forward_from_chat: number;

  @Expose()
  @Type(() => Number)
  forward_from_message_id: number;

  @Expose()
  @Type(() => String)
  forward_signature: string;

  @Expose()
  @Type(() => String)
  forward_date: string;

  @Expose()
  @Type(() => Number)
  reply_to_message: number;

  @Expose()
  @Type(() => String)
  edit_date: string;

  @Expose()
  @Type(() => String)
  media_group_id: string;

  @Expose()
  @Type(() => String)
  author_signature: string;

  @Expose()
  text: string;

  @Expose()
  @Type(() => MessageEntity)
  entities: MessageEntity[]

  @Expose()
  @Type(() => MessageEntity)
  caption_entities: MessageEntity[];

  @Expose()
  @Type(() => Audio)
  audio: Audio;

  @Expose()
  @Type(() => Document)
  document: Document;

  @Expose()
  @Type(() => Game)
  game: Game;

  @Expose()
  @Type(() => PhotoSize)
  photo: PhotoSize[];

  @Expose()
  @Type(() => MessageSticker)
  sticker: MessageSticker;

  @Expose()
  @Type(() => Video)
  video: Video;

  @Expose()
  @Type(() => Voice)
  voice: Voice;

  @Expose()
  @Type(() => VideoNote)
  video_note: VideoNote;

  @Expose()
  @Type(() => String)
  caption: string;

  @Expose()
  @Type(() => Contact)
  contact: Contact;

  @Expose()
  @Type(() => Location)
  location: Location;

  @Expose()
  @Type(() => Venue)
  venue: Venue;

  @Expose()
  @Type(() => User)
  new_chat_members: User[];

  @Expose()
  @Type(() => User)
  left_chat_member: User;

  @Expose()
  @Type(() => String)
  new_chat_title: string;

  @Expose()
  @Type(() => PhotoSize)
  new_chat_photo: PhotoSize[];

  @Expose()
  @Type(() => Boolean)
  delete_chat_photo: boolean;

  @Expose()
  @Type(() => Boolean)
  group_chat_created: boolean;

  @Expose()
  @Type(() => Boolean)
  supergroup_chat_created: boolean;

  @Expose()
  @Type(() => Boolean)
  channel_chat_created: boolean;

  @Expose()
  @Type(() => Number)
  migrate_to_chat_id: number;

  @Expose()
  @Type(() => Number)
  migrate_from_chat_id: number;

  @Expose()
  @Type(() => Number)
  pinned_message: number;

  @Expose()
  @Type(() => Invoice)
  invoice: Invoice;

  @Expose()
  @Type(() => String)
  connected_website: string;
}
