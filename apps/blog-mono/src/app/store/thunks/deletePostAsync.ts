import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../client/axios-instance";
import { getPostListAsync } from "./getPostListAsync";

export const deletePostAsync = createAsyncThunk(
  'posts/addPostAsync',
  async (options: { id: string }, { dispatch }) => {
    const { id } = options;
    await axiosInstance.delete(`posts/${id}`);

    dispatch(getPostListAsync());
  }
);