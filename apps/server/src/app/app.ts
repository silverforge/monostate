import * as path from 'path';
import * as express from 'express';
import { postsRouter } from './routes/posts-router';
import { usersRouter } from './routes/users-router';

export const app = express()
  .use('/assets', express.static(path.join(__dirname, 'assets')))
  .get('/api', (req, res) => {
    res.send({ message: 'Welcome to server!' });
  })
  .use('/api/posts', postsRouter)
  .use('/api/users', usersRouter);
