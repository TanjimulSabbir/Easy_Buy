import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../Redux/Features/Api/apiSlice';
import productSlice from '../Redux/Features/Products/productSlice';

const store = configureStore({
    reducer: { [apiSlice.reducerPath]: apiSlice.reducer, productInfo: productSlice },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
});

export default store;