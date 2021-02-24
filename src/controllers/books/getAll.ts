import { Request, Response } from "express";

import { bookModel } from "../../models/bookModel";

export const getAll = async (req: Request, res: Response) => {
  try {
    const books = await bookModel.find().exec();
    return res.json(books);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
