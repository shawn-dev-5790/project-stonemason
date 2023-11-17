import HomeReadUseCase, {
  IHomeReadUseCase,
} from '@/dtr/application/usecases/HomeReadUseCase'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TRootState } from '../AppStore'

const uc = new HomeReadUseCase(HomeReadUseCase.init())

const slice = createSlice({
  name: 'HomeReadUseCase',
  initialState: HomeReadUseCase.init(),
  reducers: {
    // api
    onUpdateApiSite: (
      _,
      { payload }: PayloadAction<IHomeReadUseCase['api']['user']>
    ) => {
      uc.user = payload
      return uc.toObject()
    },
    // state
    onUpdateCount: (_, { payload }: PayloadAction<number>) => {
      uc.onUpdateCount(payload)
      return uc.toObject()
    },
    onReset: () => uc.reset(),
  },
})
export const actions = slice.actions
export const selector = {
  slice: ({ homeRead }: TRootState) => homeRead,
  uc: ({ homeRead }: TRootState) => new HomeReadUseCase(homeRead),
}
export const HomeReadReducer = slice.reducer
