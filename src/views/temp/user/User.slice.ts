import UserUseCase from '@/dtr/application/usecases/User.uc'
import { getUserById } from '@/lib/axios/api/users'
import { TRootState } from '@/lib/react-redux/AppStore'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const uc = new UserUseCase(UserUseCase.init())

const slice = createSlice({
  name: 'UserUseCaseSlice',
  initialState: UserUseCase.init(),
  reducers: {
    onReset: () => uc.reset(),
  },
  extraReducers: (builder) => {
    builder.addCase(onUpdateApiUser.fulfilled, (_, actions) => {
      uc.user = actions.payload
      return uc.toObject()
    })
    builder.addCase(onUpdateApiUser.pending, (_, actions) => {
      uc.user = null
      return uc.toObject()
    })
  },
})

const onUpdateApiUser = createAsyncThunk(`${slice.name}/onUpdateApiUser`, getUserById)

export const actions = {
  ...slice.actions,
  onUpdateApiUser,
}

export const selector = {
  slice: ({ user }: TRootState) => user,
  uc: ({ user }: TRootState) => new UserUseCase(user),
}

export const UserReducer = slice.reducer
