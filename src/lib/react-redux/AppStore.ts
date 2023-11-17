import { configureStore } from '@reduxjs/toolkit'
import { HomeReadReducer } from './slices/HomeReadSlice'
import { UserReducer } from '@/views/temp/user/User.slice'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const AppStore = configureStore({
  reducer: {
    homeRead: HomeReadReducer,
    user: UserReducer,
  },
})

export default AppStore

export type TAppDispatch = typeof AppStore.dispatch
export type TRootState = ReturnType<typeof AppStore.getState>

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
