import { createSlice } from "@reduxjs/toolkit";
import { getPostListAsync } from "../thunks/getPostListAsync";
import { Post } from "@monostate/client";
import { getPostAsync } from "../thunks/getPostAsync";

export type PostListState = {
  posts: Post[];
  isPostListLoading: boolean;
  selectedPost: Post | undefined,
  isPostLoading: boolean;
}

const initialState: PostListState = {
  posts: [],
  isPostListLoading: false,
  selectedPost: undefined,
  isPostLoading: false,
}

const postSlice = createSlice({
  name: 'postListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostListAsync.pending, (state) => {
        state.isPostListLoading = true;
      })
      .addCase(getPostListAsync.fulfilled, (state, action) => {
        state.posts = [...action.payload];
        state.isPostListLoading = false;
      })
      .addCase(getPostAsync.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(getPostAsync.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
        state.isPostLoading = false;
      })
  }
});

export const postListReducer = postSlice.reducer;
export const postListActions = postSlice.actions;