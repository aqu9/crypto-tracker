import { updateIsConnected, updateSocket } from "./socket.reducer";

export const setSocket = (socketInstance) => {
    return async dispatch => {
        dispatch(updateSocket(socketInstance));
    };
};

export const SetIsConnected = (connectionStatus) => {
    return async dispatch => {
        dispatch(updateIsConnected(connectionStatus));
    };
};