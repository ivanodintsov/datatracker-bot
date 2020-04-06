import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
class Invoice {
  @Expose()
  @Type(() => String)
  title: string;

  @Expose()
  @Type(() => String)
  description: string;

  @Expose()
  @Type(() => String)
  start_parameter: string;

  @Expose()
  @Type(() => String)
  currency: string;

  @Expose()
  @Type(() => Number)
  total_amount: number;
}

export default Invoice;
