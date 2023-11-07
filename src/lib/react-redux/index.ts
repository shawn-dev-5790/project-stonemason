import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { globalStore } from './globalStore'

export type TAppDispatch = typeof globalStore.dispatch
export type TRootState = ReturnType<typeof globalStore.getState>

export const useAppDispatch = () => useDispatch<TAppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
