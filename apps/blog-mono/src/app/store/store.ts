import { configureStore } from '@reduxjs/toolkit'
import { appSliceReducer } from './app-slice'
import { postListReducer } from '../features/post-list/post-list-slice'
import { dialogReducer } from '../features/dialog/dialog.slice'

export const store = configureStore({
  reducer: {
    app: appSliceReducer,
    postList: postListReducer,
    dialog: dialogReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch