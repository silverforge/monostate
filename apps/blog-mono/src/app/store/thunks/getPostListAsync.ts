import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from '../../../client/axios-instance';
import { Post } from "../../../typedefs";

export const getPostListAsync = createAsyncThunk(
  'posts/getPostListAsync',
  async () => {
    return (await axiosInstance.get<Post[]>('posts')).data;
  }
);
