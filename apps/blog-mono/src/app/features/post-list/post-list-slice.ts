import { createSlice } from "@reduxjs/toolkit";
import { getPostListAsync } from "../../store/thunks/getPostListAsync";
import { Post } from "../../../typedefs";

export type PostListState = {
  posts: Post[];
}

const initialState: PostListState = {
  posts: [],
}

const postListSlice = createSlice({
  name: 'postListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostListAsync.fulfilled, (state, action) => {
      state.posts = [...action.payload];
    })
  }
});

export const postListReducer = postListSlice.reducer;
