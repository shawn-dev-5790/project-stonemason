import HomeReadUseCase, {
  IHomeReadUseCase,
} from "@/core/application/usecases/HomeReadUseCase";
import { TRootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const uc = new HomeReadUseCase(HomeReadUseCase.init());

const slice = createSlice({
  name: "HomeReadUseCaseSlice",
  initialState: HomeReadUseCase.init(),
  reducers: {
    // api
    onUpdateApiSite: (
      _,
      { payload }: PayloadAction<IHomeReadUseCase["api"]["user"]>
    ) => {
      uc.user = payload;
      return uc.toObject();
    },
    // state
    onUpdateCount: (_, { payload }: PayloadAction<number>) => {
      uc.onUpdateCount(payload);
      return uc.toObject();
    },
    onReset: () => uc.reset(),
  },
});
export const actions = slice.actions;
export const selector = {
  slice: ({ home }: TRootState) => home,
  uc: ({ home }: TRootState) =>
    home.api.user !== null ? new HomeReadUseCase(home) : uc,
};
export default slice.reducer;
