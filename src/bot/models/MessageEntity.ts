import { Exclude, Expose, Type } from 'class-transformer';
import User from './User';

@Exclude()
class MessageEntity {
  @Expose()
  @Type(() => String)
  type: string;

  @Expose()
  @Type(() => Number)
  offset: number;

  @Expose()
  @Type(() => Number)
  length: number;

  @Expose()
  @Type(() => String)
  url: string;

  @Expose()
  @Type(() => User)
  user: User;
}

export default MessageEntity;
