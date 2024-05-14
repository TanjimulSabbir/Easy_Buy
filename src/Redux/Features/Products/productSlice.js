import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: []
}

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        addUserCart: (state, action) => {
            state.carts.push(action.payload)
        }
    }
})
export const { addUserCart } = productSlice.actions;
export default productSlice.reducer;
