import { Exclude, Expose, Type } from 'class-transformer';
import PhotoSize from './PhotoSize';

@Exclude()
class Voice {
  @Expose()
  @Type(() => String)
  file_id: string;

  @Expose()
  @Type(() => Number)
  duration: number;

  @Expose()
  @Type(() => String)
  mime_type: string;

  @Expose()
  @Type(() => Number)
  file_size: number;
}

export default Voice;
