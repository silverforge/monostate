import { getPost } from "@monostate/client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostAsync = createAsyncThunk(
  'posts/getPostAsync',
  async (options: { id: string }) => {
    const { id } = options;
    return await getPost(id);
  }
);
