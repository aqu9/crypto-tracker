import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false, timestamps: false })
export class Delta {
  @Prop({ required: true })
  hour: number;

  @Prop({ required: true })
  day: number;

  @Prop({ required: true })
  week: number;

  @Prop({ required: true })
  month: number;

  @Prop({ required: true })
  quarter: number;

  @Prop({ required: true })
  year: number;
}

@Schema({
  timestamps: true,
  timeseries: {
    timeField: 'createdAt',
    metaField: 'code',
    granularity: 'minutes',
  },
})
export class Crypto {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  rate: number;

  @Prop({ required: true })
  volume: number;

  @Prop({ required: true })
  cap: number;

  @Prop({ type: Delta, required: true })
  delta: Delta;
}

export const cryptoSchema = SchemaFactory.createForClass(Crypto);
