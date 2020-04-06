import { Exclude, Expose, Type } from 'class-transformer';
import Location from './Location';

@Exclude()
class Venue {
  @Expose()
  @Type(() => Location)
  location: Location;

  @Expose()
  @Type(() => String)
  title: string;

  @Expose()
  @Type(() => String)
  address: string;

  @Expose()
  @Type(() => String)
  foursquare_id: string;

  @Expose()
  @Type(() => String)
  foursquare_type: string;
}

export default Venue;
