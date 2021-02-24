import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose';

import { db } from '../utils/db';

@modelOptions({ schemaOptions: { collection: 'books' } })
export class Book {
  @prop({ type: String, required: true })
  title: string;

  @prop({ type: Number, required: true })
  pages: number;

  @prop({ type: String, required: true })
  authors: string;

  @prop({ type: String, required: true })
  description: string;

  @prop({ type: Array, required: true })
  tags: any;
}
export const bookModel = getModelForClass(Book);

bookModel.db = db;
