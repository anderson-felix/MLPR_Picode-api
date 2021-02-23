import { Request, Response } from "express";
import * as yup from "yup";

import { bookModel } from "../../models/bookModel";

export const create = async (req: Request, res: Response) => {
  const schema = yup.object().shape({
    title: yup.string().required(),
    pages: yup.string().required(),
    authors: yup.string().required(),
    note: yup.string().required(),
    tags: yup.string().required(),
  });
  try {
    await schema.validate(req.body, { abortEarly: false });
  } catch (err) {
    return res.status(400).json({ error: err });
  }

  const { title, pages, authors, note, tags } = req.body;

  const register = {
    title,
    pages,
    authors,
    note,
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
