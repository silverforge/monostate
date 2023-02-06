import { Post, axiosInstance } from "@monostate/client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostListAsync = createAsyncThunk(
  'posts/getPostListAsync',
  async () => {
    return (await axiosInstance.get<Post[]>('posts')).data;
  }
);
