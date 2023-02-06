import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MainRoute } from "../routes/main-router";

export type AppSliceState = {
  selectedMenuItem: MainRoute;
}

const initialState: AppSliceState = {
  selectedMenuItem: MainRoute.home
}

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setSelectedMenuItem: (state, action: PayloadAction<MainRoute>) => {
      state.selectedMenuItem = action.payload;
    }
  }
});

export const appSliceActions = appSlice.actions;
export const appSliceReducer = appSlice.reducer;