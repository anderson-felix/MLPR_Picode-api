import { Request, Response } from "express";

import { bookModel } from "../../../models/bookModel";

export const getBooks = async (req: Request, res: Response) => {
  const { tag } = req.params;

  try {
    const books = await bookModel.find({ tags: tag }).exec();
    return res.json({ books: books });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
