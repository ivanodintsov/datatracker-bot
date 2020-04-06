import { Exclude, Expose, Type } from 'class-transformer';
import PhotoSize from './PhotoSize';

@Exclude()
class Animation {
  @Expose()
  @Type(() => String)
  file_id: string;

  @Expose()
  @Type(() => Number)
  width: number;

  @Expose()
  @Type(() => Number)
  height: number;

  @Expose()
  @Type(() => Number)
  duration: number;

  @Expose()
  @Type(() => PhotoSize)
  thumb: PhotoSize;

  @Expose()
  @Type(() => String)
  file_name: string;

  @Expose()
  @Type(() => String)
  mime_type: string;

  @Expose()
  @Type(() => Number)
  file_size: number;
}

export default Animation;
