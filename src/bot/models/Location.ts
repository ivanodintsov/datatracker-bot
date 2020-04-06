import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
class Location {
  @Expose()
  @Type(() => Number)
  longitude: number;

  @Expose()
  @Type(() => Number)
  latitude: number;
}

export default Location;
