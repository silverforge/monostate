import * as express from 'express';
import { addPost, deletePost, getPostList, getSinglePost, updatePost } from '@monostate/data-access';

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
  })
  .delete('/:postId', async (req, res) => {
    const { postId } = req.params;
    await deletePost(postId);
    res.status(200).json({ id: postId });
  })
  .get('/:postId', async (req, res) => {
    const { postId } = req.params;
    const post = await getSinglePost(postId);
    res.status(200).json(post);
  })
  .post('/:postId', async (req, res) => {
    const { postId } = req.params;
    const { title, text } = req.body;
    const post = await updatePost(postId, title, text);
    res.status(200).json(post);
  });
