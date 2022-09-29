import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nftCollectionsApi } from "../shared/api";
import {
  CollectionsParamsType,
  INFTCollection,
} from "../shared/api/nft-collections";

export const fetchCollections = createAsyncThunk(
  "nft-collections/fetchCollections",
  async (params: CollectionsParamsType, thunkApi) => {
    try {
      const response = await nftCollectionsApi.getAllCollections(params);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue("Error loading NFT collections");
    }
  }
);

interface CollectionsState {
  collections: INFTCollection[];
  isLoading: boolean;
  error: string;
}

const initialState: CollectionsState = {
  collections: [],
  isLoading: false,
  error: "",
};

const nftCollectionsSlice = createSlice({
  name: "nft-collections",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCollections.pending.type]: (state) => {
      state.isLoading = false;
    },
    [fetchCollections.fulfilled.type]: (
      state,
      action: PayloadAction<INFTCollection[]>
    ) => {
      state.collections = action.payload;
      state.isLoading = true;
    },
    [fetchCollections.pending.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default nftCollectionsSlice.reducer;
