import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPost } from "@monostate/client"

export const addPostAsync = createAsyncThunk(
  'posts/addPostAsync',
  async (options: { title: string, text: string }) => {
    const { title, text } = options;
    return await addPost(title, text);
  }
);