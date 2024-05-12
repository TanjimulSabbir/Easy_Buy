import { apiSlice } from "../Api/apiSlice";


const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ page = 1 }) => ({
                url: `/products/?page=${page}`
            })
        }),
        getSpecifiedProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`
            })
        }),
        getFilteredProducts: builder.query({
            query: ({ page = 1 }) => ({
                url: `/products/?page=${page}`
            })
        })
    })
})

export const { useGetProductsQuery, useGetSpecifiedProductQuery, useGetFilteredProductsQuery } = productApi;
