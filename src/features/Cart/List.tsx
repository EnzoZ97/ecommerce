import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListState {
    value: Array<{ id: string, name: string, img: Array<string> , price: number, description: Array<string> ,
        category: string, amount: number }>
}

const initialState: ListState = {
    value: []
}

export const ListSlice = createSlice({
    name: 'listSlice',
    initialState,
    reducers:{
        addProduct: (state, action : PayloadAction<{ id: string, name: string, img: Array<string> , price: number, description: Array<string> ,
			category: string, amount: number }>) => {
				state.value.push(action.payload);
		},
		removeProduct: (state, action: PayloadAction<string>) => {
			state.value = state.value.filter((elem) => elem.id !== action.payload);
		},
		clearAll: (state) => {
			state.value = [];
		}
    }
})

export const { addProduct, removeProduct, clearAll } = ListSlice.actions;

export default ListSlice.reducer;