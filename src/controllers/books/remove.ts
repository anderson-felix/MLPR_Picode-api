import { Request, Response } from 'express';

import { bookModel } from '../../models/bookModel';

export const remove = async (req: Request, res: Response) => {
  const { _id } = req.params;

  const book = await bookModel.findById(_id);

  if (!book) return res.status(404).json({ error: `Book ID:${_id} not found` });

  await bookModel.deleteOne({ _id });

  return res
    .status(204)
    .json({ message: `Book ID:${_id} deleted successfully` });
};
