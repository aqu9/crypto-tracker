import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    socket: null,
    isConnected: false
};

const socketReducer = createSlice({
    name: 'Socket_Reducer',
    initialState,
    reducers: {
        updateSocket: (state, { payload }) => {
            state.socket = payload;
        },
        updateIsConnected: (state, { payload }) => {
            state.isConnected = payload;
        },

    },
});

export const {
    updateSocket,
    updateIsConnected
} = socketReducer.actions;

export default socketReducer.reducer;
