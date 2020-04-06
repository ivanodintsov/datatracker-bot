import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
class UserPhoto {
  @Expose()
  @Type(() => String)
  file_name: string;

  @Expose()
  @Type(() => Number)
  width: number;

  @Expose()
  @Type(() => Number)
  height: number;

  @Expose()
  @Type(() => Number)
  file_size: number;
}

export default UserPhoto;
