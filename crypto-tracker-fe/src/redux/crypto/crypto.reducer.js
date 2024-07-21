import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCryptoList: null,
  cryptoDetail: {
    code: "",
    detail: [],
  },
};

const cryptoReducer = createSlice({
  name: "Crypto_Reducer",
  initialState,
  reducers: {
    updateAllCrypto: (state, { payload }) => {
      state.allCryptoList = payload;
    },
    updateCryptoDetail: (state, { payload }) => {
      state.cryptoDetail = payload;
    },
    updateRealTimeCryptoDetail: (state, { payload }) => {
      state.cryptoDetail.detail = [payload, ...state.cryptoDetail.detail];
    },
  },
});

export const {
  updateAllCrypto,
  updateCryptoDetail,
  updateRealTimeCryptoDetail,
} = cryptoReducer.actions;

export default cryptoReducer.reducer;
