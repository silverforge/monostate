import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../../../client/axios-instance';

export const getPostListAsync = createAsyncThunk(
  'posts/getPostListAsync',
  async () => {
    console.log('postlist async');
    return await (await axiosInstance.get('posts')).data;
  }
);
