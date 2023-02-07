import { getPostList } from "@monostate/client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostListAsync = createAsyncThunk(
  'posts/getPostListAsync',
  async () => await getPostList()
);
