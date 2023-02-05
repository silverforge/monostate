import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../client/axios-instance";

export type AddPostAsyncResponse = {
  id: string;
}

export const addPostAsync = createAsyncThunk(
  'posts/addPostAsync',
  async () => {
    return (await axiosInstance.post<AddPostAsyncResponse>('posts', {
      title: "title",
      text: "text"
    })).data;
  }
);