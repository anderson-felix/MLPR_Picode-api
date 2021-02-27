import { Request, Response } from 'express';

import { bookModel } from '../../models/bookModel';

export const getBooks = async (req: Request, res: Response) => {
  try {
    const tag = req.params.tag;
    const query = tag ? { tags: tag } : {};
    const books = await bookModel.find(query).sort({ _id: -1 }).exec();
    return res.json(books);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
