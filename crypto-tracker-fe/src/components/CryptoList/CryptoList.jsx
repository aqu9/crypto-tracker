import React from "react";
import CryptoCard from "../Card/CryptoCard";

const CryptoList = ({ allCryptoList }) => {
  return (
    <div className="flex justify-center mt-5">
      <div className="w-1/3">
        {allCryptoList?.map((elem, index) => {
          return (<div key={index} className="m-5">
            <CryptoCard crypto={elem} />
          </div>)
        })}
      </div>
    </div>
  );
};

export default CryptoList;
