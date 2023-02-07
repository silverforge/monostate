import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostListAsync } from "./getPostListAsync";
import { deletePost } from "@monostate/client";

export const deletePostAsync = createAsyncThunk(
  'posts/addPostAsync',
  async (options: { id: string }, { dispatch }) => {
    const { id } = options;
    const response = await deletePost(id);
    dispatch(getPostListAsync());
    return response;
  }
);