import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { LoginPageUseCaseSliceReducer } from './slices/LoginPageUseCaseSlice'

export default class StoreManager {
  public static get store() {
    return AppStore
  }
}

export type TAppDispatch = typeof AppStore.dispatch
export type TRootState = ReturnType<typeof AppStore.getState>

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector

const AppStore = configureStore({
  reducer: {
    LoginPageUseCaseSliceReducer,
  },
})
