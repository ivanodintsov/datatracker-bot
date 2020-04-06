import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
class PhotoSize {
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
  @Type(() => String)
  file_path: string;

  @Expose()
  @Type(() => Number)
  file_size: number;

  @Expose()
  @Type(() => String)
  local_path: string;
}

export default PhotoSize;
