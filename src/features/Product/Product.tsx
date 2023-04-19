import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    value:  {
        name: string,
        img: Array<string>,
        price: number,
        description: Array<string>,
        category: string
    }
}



const initialState : Product = {
    value: {
        name: '',
        img: [],
        price: 0,
        description: [],
        category: 'string'
    }
}

export const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers:
        {
            updateProduct: (state, action : PayloadAction<{ name: string, img: Array<string>, price: number, description: Array<string>, category: string }>) => {
                state.value = action.payload
            }
        }
})

export const { updateProduct } = ProductSlice.actions;
export default ProductSlice.reducer;