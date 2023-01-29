import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AppSliceState = {
  selectedMenuItem: string;
}

const initialState: AppSliceState = {
  selectedMenuItem: '/'
}

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setSelectedMenuItem: (state, action: PayloadAction<string>) => {
      state.selectedMenuItem = action.payload;
    }
  }
});

export const { setSelectedMenuItem } = appSlice.actions;
export const appSliceReducer = appSlice.reducer;