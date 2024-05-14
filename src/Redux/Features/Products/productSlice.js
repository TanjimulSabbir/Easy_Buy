import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: [],
    allCategories: []
}

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        addUserCart: (state, action) => {
            state.carts.push(action.payload)
        },
        addAllCategories: (state, action) => {
            state.allCategories = action.payload
        }
    }
})
export const { addUserCart, addAllCategories } = productSlice.actions;
export default productSlice.reducer;
