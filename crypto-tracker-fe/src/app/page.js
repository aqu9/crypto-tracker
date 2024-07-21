'use client'
import CryptoList from "@/components/CryptoList/CryptoList";
import { fetchAllCrypto, udpateAllCryptoList } from "@/redux/crypto/crypto.action";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch()
  const { allCryptoList } = useSelector((state) => state.cryptoReducer)
  const { socket } = useSelector((state) => state.socketReducer)
  useEffect(() => {
    dispatch(fetchAllCrypto())
    if (!socket) return

    socket.on("all", (data) => { dispatch(udpateAllCryptoList(data)); console.log("all", data) })

    return () => {
      // socket.disconnect();
      socket.off("all")
    }
  }, [socket])
  return (
    <main>
      <div>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight text-center mt-5">
          Crypto Tracker
        </h2>

      </div>
      <div>
        <CryptoList allCryptoList={allCryptoList} />
      </div>
    </main>
  );
}
