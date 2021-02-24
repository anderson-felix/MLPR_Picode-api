import { Request, Response } from 'express';
import * as yup from 'yup';

import { bookModel } from '../../models/bookModel';

export const create = async (req: Request, res: Response) => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    pages: yup.number().required(),
    authors: yup.string().required(),
    description: yup.string().required(),
    tags: yup.string().required(),
  });
  try {
    await schema.validate(req.body, { abortEarly: false });
  } catch (err) {
    return res.status(400).json({ error: err });
  }

  let { title, pages, authors, description, tags } = req.body;

  tags = tags.split(' ');

  const register = {
    title,
    pages,
    authors,
    description,
    tags,
  };

  const book = new bookModel();

  Object.assign(book, register);

  try {
    const data = await bookModel.create(book);
    await data.save();

    return res.status(201).json({ created: data });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};
