import { configureStore } from '@reduxjs/toolkit'
import { HomeReadReducer } from './slices/HomeReadSlice'
import { UserReducer } from '@/views/temp/user/User.slice'

export const globalStore = configureStore({
  reducer: {
    homeRead: HomeReadReducer,
    user: UserReducer,
  },
})
