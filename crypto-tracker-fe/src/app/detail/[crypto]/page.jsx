'use client'
import { fetchAllCrypto, fetchCryptoDetails, updateCryptoDetailsPage } from '@/redux/crypto/crypto.action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CryptoDetailTable from "@/components/Table/CryptoDetailTable"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { CryptoDropdownMenuCheckboxes } from "@/components/DropDown/CryptoDropDown"

const CryptoDetail = ({ params: { crypto } }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { cryptoDetail, allCryptoList } = useSelector((state) => state.cryptoReducer)
  const { socket } = useSelector((state) => state.socketReducer)
  useEffect(() => {
    dispatch(fetchCryptoDetails(crypto, 20))
    if (!allCryptoList?.length) {
      dispatch(fetchAllCrypto())
    }
    if (!socket) return
    socket.on(crypto, (data) => { dispatch(updateCryptoDetailsPage({ ...data, createdAt: new Date().toISOString() })); console.log(crypto, data) })
    return () => {
      socket.off(crypto)
    }
  }, [socket])
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex items-center justify-center gap-5'>
          <h2 className="pb-2 text-3xl font-semibold tracking-tight text-center mt-5">
            Crypto Tracker - {" "}
            <CryptoDropdownMenuCheckboxes allCryptoList={allCryptoList} crypto={crypto} />

          </h2>
          <Button variant={"secondary"} onClick={() => { router.push("/") }}>Crypto List</Button>

        </div>
      </div>
      <div className='m-5 px-2'>

        <CryptoDetailTable cryptoDetail={cryptoDetail} />
      </div>
    </>
  )
}

export default CryptoDetail