import axios from "axios";
import {
  updateAllCrypto,
  updateCryptoDetail,
  updateRealTimeCryptoDetail,
} from "./crypto.reducer";

export const fetchCryptoDetails = (code, limit) => {
  const cryptoDetails = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/crypto/detail/${code}/${limit}`
      );
      return data;
    } catch (error) {
      return null;
    }
  };
  return async (dispatch) => {
    try {
      const data = await cryptoDetails();
      dispatch(updateCryptoDetail({ code, detail: data }));
      return;
    } catch (error) {
      return;
    }
  };
};

export const updateCryptoDetailsPage = (detail) => {
  return async (dispatch) => {
    try {
      dispatch(updateRealTimeCryptoDetail(detail));
      return;
    } catch (error) {
      return;
    }
  };
};

export const fetchAllCrypto = () => {
  const cryptoDetails = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/crypto`
      );
      return data;
    } catch (error) {
      return null;
    }
  };
  return async (dispatch) => {
    try {
      const data = await cryptoDetails();
      dispatch(updateAllCrypto(data));
      return;
    } catch (error) {
      return;
    }
  };
};
export const udpateAllCryptoList = (cryptoList) => {
  return async (dispatch) => {
    try {
      dispatch(updateAllCrypto(cryptoList));
      return;
    } catch (error) {
      return;
    }
  };
};
