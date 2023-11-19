import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const AppStore = configureStore({
  reducer: {},
})

export default AppStore

export type TAppDispatch = typeof AppStore.dispatch
export type TRootState = ReturnType<typeof AppStore.getState>

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
