import * as express from 'express';
import { addPost, getPostList } from '@monostate/data-access';

// baseUrl: /api/posts
export const postsRouter = express.Router({})
  .get('/', async (req, res) => {
    const list = await getPostList();
    res.status(200).json(list);
  })
  .post('/', async (req, res) => {
    const { title, text } = req.body;
    const post = await addPost({
      title,
      text,
      userId: '63adcf079a9c79dafea7dbfa',
    });

    res.status(200).json({ id: post.id });
  });
