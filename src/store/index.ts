import { configureStore } from "@reduxjs/toolkit";
import nftCollectionsSlice from "./nft-collections-slice";

export const store = configureStore({
  reducer: {
    nftCollectionsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
