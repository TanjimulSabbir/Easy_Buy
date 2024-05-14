import { apiSlice } from "../Api/apiSlice";


const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: `/products/`
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
            query: () => ({
                url: `/products/`
            })
        })
    })
})

export const { useGetProductsQuery, useGetRelatedProductsQuery, useGetSpecifiedProductQuery, useGetFilteredProductsQuery } = productApi;
