import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../client/axios-instance";

export const deletePostAsync = createAsyncThunk(
  'posts/addPostAsync',
  async (options: { id: string }) => {
    const { id } = options;
    await axiosInstance.delete(`posts/${id}`);
  }
);