import { apiSlice } from "../Api/apiSlice";


const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products"
            })
        })
    })
})

const { useGetProductsQuery } = productApi;
