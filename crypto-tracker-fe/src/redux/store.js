import {
    configureStore,
    // getDefaultMiddleware,
    // MiddlewareArray,
} from '@reduxjs/toolkit';

import reducer from './root-reducers';

// const defaultMiddleware = getDefaultMiddleware({
//     serializableCheck: false,
// });
// const CustomMiddleware = new MiddlewareArray().concat(defaultMiddleware);


/** Redux global store */
const Store = configureStore({
    reducer,
    // middleware: CustomMiddleware,
});

export default Store;
