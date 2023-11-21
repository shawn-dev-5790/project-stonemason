import LoginPageUseCase from '@/core/application/usecases/LoginPageUseCase'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TRootState } from '../StoreManager'

const uc = new LoginPageUseCase(LoginPageUseCase.init())

const slice = createSlice({
  name: 'LoginPageUseCaseSlice',
  initialState: LoginPageUseCase.init(),
  reducers: {
    // system
    onReset: () => LoginPageUseCase.reset(),
    // features
    onChangeEmail: (_, { payload }: PayloadAction<Parameters<typeof uc.onChangeEmail>[0]>) => {
      uc.onChangeEmail(payload)
      return uc.toObject()
    },
    onChangePassword: (_, { payload }: PayloadAction<Parameters<typeof uc.onChangePassword>[0]>) => {
      uc.onChangePassword(payload)
      return uc.toObject()
    },
  },
})

export const actionsLoginPageUseCase = slice.actions
export const selectLoginPageUseCase = (root: TRootState) => root.LoginPageUseCaseSliceReducer
export const LoginPageUseCaseSliceReducer = slice.reducer
