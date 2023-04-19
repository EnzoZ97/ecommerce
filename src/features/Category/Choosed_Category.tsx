import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState{
    value: string
}

const initialState: CategoryState = {
    value: "All"
}

export const CategorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers:{
        updateCategory: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const { updateCategory } = CategorySlice.actions;
export default CategorySlice.reducer;