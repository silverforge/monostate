import * as express from 'express';
import { getPostList } from '@monostate/data-access';

// baseUrl: /api/posts
export const postsRouter = express.Router({})
  .get('/', async (req, res) => {
    const list = await getPostList();
    res.status(200).json(list);
  })
  .post('/', async (req, res) => {
    console.log(' ::: req.body ::: ', req.body);
    res.status(200).json({ id: 1 });
  });
