import { Router } from "express";

import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "./controllers/books/index";

const routes = Router();

routes.post("/books", create);
routes.get("/books", getAll);
routes.get("/books/:tag", getOne);
routes.put("/books/:_id", update);
routes.delete("/books/:_id", remove);

export default routes;
