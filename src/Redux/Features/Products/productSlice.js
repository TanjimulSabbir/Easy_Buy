import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: [],
    allCategories: [],
    searchPath: []
}

const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        addUserCart: (state, action) => {
            state.carts.push(action.payload);
        },
        addAllCategories: (state, action) => {
            state.allCategories = action.payload;
        },
        addFilteringPath: (state, action) => {
            if (action.payload === "clear") {
                state.searchPath = [];
                return;
            }
            const existType = action.payload.split("=")[0];

            // Find if the keyword already exists in the searchPath
            const keywordIndex = state.searchPath.findIndex(item => item.includes('keyword'));

            // If the action type is an empty string and the keyword exists
            if (existType === "keyword" && action.type === "" && keywordIndex !== -1) {
                state.searchPath.splice(keywordIndex, 1); // Remove the keyword from the searchPath
            } else {
                // Find if the existType already exists in the searchPath
                const alreadyExists = state.searchPath.findIndex(item => item.includes(existType));

                if (alreadyExists !== -1) {
                    state.searchPath[alreadyExists] = action.payload; // Update the existType
                } else {
                    state.searchPath.push(action.payload); // Add the new path
                }
            }
        }

    }
})
export const { addUserCart, addAllCategories, addFilteringPath } = productSlice.actions;
export default productSlice.reducer;
