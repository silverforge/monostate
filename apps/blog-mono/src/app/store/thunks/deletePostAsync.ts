import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPostListAsync } from "./getPostListAsync";
import { axiosInstance } from "@monostate/client";

export type DeletePostAsyncResponse = {
  id: string;
}

export const deletePostAsync = createAsyncThunk(
  'posts/addPostAsync',
  async (options: { id: string }, { dispatch }) => {
    const { id } = options;
    const response = await (await axiosInstance.delete<DeletePostAsyncResponse>(`posts/${id}`)).data;
    dispatch(getPostListAsync());
    return response;
  }
);