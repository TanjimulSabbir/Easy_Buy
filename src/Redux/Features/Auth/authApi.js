import { apiSlice } from "../Api/apiSlice";


const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        regisger: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            })
        })
    })
})

// const {}=authApi