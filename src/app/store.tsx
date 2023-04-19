import { configureStore } from '@reduxjs/toolkit';
import { ListSlice } from '../features/Cart/List';
import { CategorySlice } from '../features/Category/Choosed_Category';
import { DataSlice } from '../features/Data';
import { PageNumberSlice } from '../features/NavigationPageNumber/PageNumber';
import { ProductSlice } from '../features/Product/Product';

export const store = configureStore({
    reducer:{
        Data: DataSlice.reducer,
        List: ListSlice.reducer,
        Category: CategorySlice.reducer,
        PageNumber: PageNumberSlice.reducer,
        Product : ProductSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;