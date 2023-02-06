import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@monostate/client"

export type AddPostAsyncResponse = {
  id: string;
}

export const addPostAsync = createAsyncThunk(
  'posts/addPostAsync',
  async (options: {
    title: string,
    text: string,
  }) => {
    const { title, text } = options;

    return (await axiosInstance.post<AddPostAsyncResponse>('posts', {
      title,
      text,
    })).data;
  }
);