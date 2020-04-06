import { Exclude, Expose, Type } from 'class-transformer';
import PhotoSize from './PhotoSize';

@Exclude()
class Audio {
  @Expose()
  @Type(() => String)
  file_id: string;

  @Expose()
  @Type(() => Number)
  duration: number;

  @Expose()
  @Type(() => String)
  performer: string;

  @Expose()
  @Type(() => String)
  title: string;

  @Expose()
  @Type(() => String)
  mime_type: string;

  @Expose()
  @Type(() => Number)
  file_size: number;

  @Expose()
  @Type(() => PhotoSize)
  thumb: PhotoSize;
}

export default Audio;
