import { combineReducers } from "@reduxjs/toolkit"
import socketReducer from "./socket/socket.reducer"
import cryptoReducer from "./crypto/crypto.reducer"
const RootReducer = combineReducers({ socketReducer, cryptoReducer })
export default RootReducer