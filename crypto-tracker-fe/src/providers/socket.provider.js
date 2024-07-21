"use client";
import { SetIsConnected, setSocket } from "@/redux/socket/socket.action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io as ClientIo } from "socket.io-client";

export const SocketProvider = ({ children }) => {
    const dispatch = useDispatch()
    const { isConnected } = useSelector((state) => state.socketReducer)


    useEffect(() => {
        console.log(isConnected, "isConnected")
        const SocketInstance = new (ClientIo)(
            process.env.NEXT_PUBLIC_BASE_URL,
            {
                transports: ["websocket", "polling"],
            }
        );

        SocketInstance.on("connect", () => {
            console.log("connected");
            dispatch(SetIsConnected(true));
        });
        SocketInstance.on("disconnect", () => {
            console.log("disconnected");
            dispatch(SetIsConnected(false));
        });

        dispatch(setSocket(SocketInstance));

        return () => {
            SocketInstance.disconnect();
            // setSocket(null)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>{children}</div>;
};

export default SocketProvider;
