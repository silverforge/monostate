import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type DialogState = {
  postId: string;
  isDeleteDialogOpen: boolean;
  isEditDialogOpen: boolean;
}

const initialState: DialogState = {
  postId: "",
  isDeleteDialogOpen: false,
  isEditDialogOpen: false,
}

const dialogSlice = createSlice({
  name: 'dialogSlice',
  initialState,
  reducers: {
    openDeleteDialog: (state, action: PayloadAction<string>) => {
      state.isDeleteDialogOpen = true;
      state.postId = action.payload;
    },
    closeDeleteDialog: (state) => {
      state.isDeleteDialogOpen = false;
      state.postId = "";
    },
    openEditDialog: (state, action: PayloadAction<string>) => {
      state.isEditDialogOpen = true;
      state.postId = action.payload;
    },
    closeEditDialog: (state) => {
      state.isEditDialogOpen = false;
      state.postId = "";
    },
  }
});

export const dialogReducer = dialogSlice.reducer;
export const dialogActions = dialogSlice.actions;
