import { createSlice } from "@reduxjs/toolkit";
import { getPostListAsync } from "../../store/thunks/getPostListAsync";

export type PostListState = {
  posts: unknown;
}

const initialState: PostListState = {
  posts: undefined,
}

const postListSlice = createSlice({
  name: 'postListSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostListAsync.fulfilled, (state, action) => {
      console.log('action payload', action.payload);
    })
  }
});

export const postListReducer = postListSlice.reducer;
