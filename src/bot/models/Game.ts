import { Exclude, Expose, Type } from 'class-transformer';
import PhotoSize from './PhotoSize';
import MessageEntity from './MessageEntity';
import Animation from './Animation';

@Exclude()
class Game {
  @Expose()
  @Type(() => String)
  title: string;

  @Expose()
  @Type(() => String)
  description: string;

  @Expose()
  @Type(() => PhotoSize)
  photo: PhotoSize[];

  @Expose()
  @Type(() => String)
  text: string;

  @Expose()
  @Type(() => MessageEntity)
  text_entities: MessageEntity[];

  @Expose()
  @Type(() => Animation)
  animation: Animation
}

export default Game;
