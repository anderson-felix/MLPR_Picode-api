import express from 'express';
import cors from 'cors';

import routes from './routes';

const server = express();

server.listen(3333);

server.use(express.json());

server.use(cors({ origin: true }));

server.use(routes);

export default server;
