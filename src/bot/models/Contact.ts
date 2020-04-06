import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
class Contact {
  @Expose()
  @Type(() => String)
  phone_number: string;

  @Expose()
  @Type(() => String)
  first_name: string;

  @Expose()
  @Type(() => String)
  last_name: string;

  @Expose()
  @Type(() => Number)
  user_id: number;

  @Expose()
  @Type(() => String)
  vcard: string;
}

export default Contact;
