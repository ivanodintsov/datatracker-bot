import { Exclude, Expose, Type } from 'class-transformer';
import UserPhoto from './UserPhoto';

@Exclude()
class User {
  @Expose()
  @Type(() => Number)
  id: number;

  @Expose()
  @Type(() => Boolean)
  is_bot: boolean;

  @Expose()
  @Type(() => String)
  first_name: string;

  @Expose()
  @Type(() => String)
  last_name: string;

  @Expose()
  @Type(() => String)
  username: string;

  @Expose()
  @Type(() => String)
  language_code: string;

  @Expose()
  @Type(() => UserPhoto)
  photo: [UserPhoto]
}

export default User;
