import { configureStore } from '@reduxjs/toolkit'
import { appSliceReducer } from './app-slice'
import { postReducer } from './slices/post-slice'
import { dialogReducer } from './slices/dialog.slice'

export const store = configureStore({
  reducer: {
    app: appSliceReducer,
    post: postReducer,
    dialog: dialogReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch