import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

import { db } from "../utils/db";

@modelOptions({ schemaOptions: { collection: "books" } })
export class Book {
  @prop({ type: String, required: true })
  title: string;

  @prop({ type: String, required: true })
  authors: string;

  @prop({ type: String, required: true })
  note: string;

  @prop({ type: String, required: true })
  pages: string;

  @prop({ type: String, required: true })
  tags: string;
}
export const bookModel = getModelForClass(Book);

bookModel.db = db;
