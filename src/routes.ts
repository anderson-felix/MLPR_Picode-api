import { Router } from 'express';

import { create, getBooks, update, remove } from './controllers/books/index';

const routes = Router();

routes.post('/books', create);
routes.get('/books/:tag?', getBooks);
routes.put('/books/:_id', update);
routes.delete('/book/:_id', remove);

export default routes;
