import * as path from 'path';
import * as express from 'express';
import * as cors from 'cors';
import { postsRouter } from './routes/posts-router';
import { usersRouter } from './routes/users-router';

console.info(' ::: dirname ::: ', __dirname);

export const app = express()
  .use(cors({
    origin: true
  }))
  .use('/assets', express.static(path.join(__dirname, 'assets')))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .get('/api', (req, res) => {
    res.send({ message: 'Welcome to server!' });
  })
  .use('/api/posts', postsRouter)
  .use('/api/users', usersRouter);
