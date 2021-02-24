import { Request, Response } from 'express';

import { bookModel } from '../../models/bookModel';

export const update = async (req: Request, res: Response) => {
  const { _id } = req.params;

  const book = bookModel.findById(_id);
  if (!book) return res.status(404).json({ error: `Book ID:${_id} not found` });

  //converting tags from Array
  let { tags } = req.body;
  tags = tags.split(' ');
  req.body.tags = tags;

  try {
    const book = await bookModel.findByIdAndUpdate(_id, req.body);
    await book.save();
  } catch (err) {
    return res.status(400).json({ error: err });
  }

  const newBook = await bookModel.findById(_id);
  return res.status(200).json({ updated: newBook });
};
