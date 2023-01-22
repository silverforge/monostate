/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { getPostList } from '@monostate/data-access';
import * as express from 'express';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

app.get('/api/posts', async (req, res) => {
  const list = await getPostList();
  res.status(200).json(list);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
