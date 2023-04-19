import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageNumberState{
    value: number;
}

const initialState : PageNumberState = {
    value: 1,
}

export const PageNumberSlice = createSlice({
    name: 'PageNumber',
    initialState,
    reducers:{
        updatePageNumber: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        }
    }
})


export const { updatePageNumber } = PageNumberSlice.actions;
export default PageNumberSlice.reducer;