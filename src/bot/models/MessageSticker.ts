import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
class MessageSticker {
  @Expose()
  @Type(() => String)
  file_id: string;

  @Expose()
  @Type(() => String)
  set_name: string;
}

export default MessageSticker;
