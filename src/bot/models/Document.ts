import { Exclude, Expose, Type } from 'class-transformer';
import PhotoSize from './PhotoSize';

@Exclude()
class Document {
  @Expose()
  @Type(() => String)
  file_id: string;

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

export default Document;
