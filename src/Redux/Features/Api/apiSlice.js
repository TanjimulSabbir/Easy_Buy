import { createSlice } from "@reduxjs/toolkit";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";


export const apiSlice = createSlice({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://summerfield.store/",
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState().auth?.accessToken;
            console.log(token, "from apiSlice")
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        }
    }),
    tagTypes: [],
    endpoints: (builder) => ({})
})