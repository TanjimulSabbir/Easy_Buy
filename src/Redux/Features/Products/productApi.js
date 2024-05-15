import { apiSlice } from "../Api/apiSlice";


const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (page) => ({
                url: `/products/?page=${page}`
            })
        }),
        getRelatedProducts: builder.query({
            query: (id) => ({
                url: `/products/related-product/${id}/`
            })
        }),
        getSpecifiedProduct: builder.query({
            query: (id) => ({
                url: `/products/${id}`
            })
        }),
        getFilteredProducts: builder.query({
            query: (keyword) => ({
                url: `/products/${keyword}`
            })
        })
    })
})

export const { useGetProductsQuery, useGetRelatedProductsQuery, useGetSpecifiedProductQuery, useGetFilteredProductsQuery } = productApi;
