import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getPostListAsync } from "../../store/thunks/getPostListAsync";
import { Post } from "../../../typedefs";

export type PostListState = {
  posts: Post[];
  isPostListLoading: boolean;
  isDeleteDialogOpen: boolean;
  markedAsDeletedId: string;
}

const initialState: PostListState = {
  posts: [],
  isPostListLoading: false,
  isDeleteDialogOpen: false,
  markedAsDeletedId: "",
}

const postListSlice = createSlice({
  name: 'postListSlice',
  initialState,
  reducers: {
    openDeleteDialog: (state, action: PayloadAction<string>) => {
      state.isDeleteDialogOpen = true;
      state.markedAsDeletedId = action.payload;
    },
    closeDeleteDialog: (state) => {
      state.isDeleteDialogOpen = false;
      state.markedAsDeletedId = "";
    }
  },
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
export const postListActions = postListSlice.actions;