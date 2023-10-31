import { configureStore } from "@reduxjs/toolkit";

import HomeReducer from "@/core/adaptor/redux-toolkit/HomeReadUseCaseSlice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export type TAppDispatch = typeof globalStore.dispatch;
export type TRootState = ReturnType<typeof globalStore.getState>;

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export const globalStore = configureStore({
  reducer: {
    home: HomeReducer,
  },
});
