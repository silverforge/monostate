import * as express from 'express';
import { getUserList } from '@monostate/data-access';

// baseUrl: /api/users
export const usersRouter = express.Router({})
  .get('/', async (req, res) => {
    const list = await getUserList()
    res.status(200).json(list);
  });
