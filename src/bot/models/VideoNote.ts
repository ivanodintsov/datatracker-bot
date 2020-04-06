import { Exclude, Expose, Type } from 'class-transformer';
import PhotoSize from './PhotoSize';

@Exclude()
class VideoNote {
  @Expose()
  @Type(() => String)
  file_id: string;

  @Expose()
  @Type(() => Number)
  length: number;

  @Expose()
  @Type(() => Number)
  duration: number;

  @Expose()
  @Type(() => PhotoSize)
  thumb: PhotoSize;

  @Expose()
  @Type(() => Number)
  file_size: number;
}

export default VideoNote;
