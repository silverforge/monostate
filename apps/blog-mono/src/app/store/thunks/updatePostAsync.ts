import { updatePost } from "@monostate/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostListAsync } from "./getPostListAsync";

export const updatePostAsync = createAsyncThunk(
  'posts/updatePostAsync',
  async (options: { id: string | undefined, title: string, text: string }, { dispatch }) => {
    const { id, title, text } = options;
    if (!id) return null;
    const responseData = await updatePost(id, title, text);
    dispatch(getPostListAsync());
    return responseData;
  }
);