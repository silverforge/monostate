import { createSlice } from "@reduxjs/toolkit";
import { getPostListAsync } from "../../store/thunks/getPostListAsync";
import { Post } from "../../../typedefs";

export type PostListState = {
  posts: Post[];
  isPostListLoading: boolean;
}

const initialState: PostListState = {
  posts: [],
  isPostListLoading: false,
}

const postListSlice = createSlice({
  name: 'postListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostListAsync.pending, (state) => {
        state.isPostListLoading = true;
      })
      .addCase(getPostListAsync.fulfilled, (state, action) => {
        state.isPostListLoading = false;
        state.posts = [...action.payload];
      })
  }
});

export const postListReducer = postListSlice.reducer;
