import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema()
// сущность юзер с полями программы, почта, возраст, имя, гражданство, отправляли?)
export class Job {
  @Prop()
  name: string;

  @Prop()
  salary: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);
