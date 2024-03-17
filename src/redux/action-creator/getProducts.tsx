import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductType } from '../reducers/productsReducer';

export const GetProducts = createAsyncThunk<
    ProductType[],
    undefined,
    { rejectValue: string }
>('products/GetProducts', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get<ProductType[]>(
            'https://fakestoreapi.com/products'
        );

        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
