import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GetProducts } from '../action-creator/getProducts';

export interface ProductType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface ProductState {
    data: ProductType[];
    loading: boolean;
    error: string | null;
    totalPrice: number;
}
const initialState: ProductState = {
    data: [],
    loading: false,
    error: null,
    totalPrice: 0,
};
interface deleteProductType {
    id: number;
    price: number;
    quantity: number;
}

const productSlice = createSlice({
    name: 'productData',
    initialState,
    reducers: {
        reduceQuantityOfProduct(state, action: PayloadAction<number>) {
            state.data.map((product) =>
                product.id === action.payload
                    ? (product.rating.count -= 1)
                    : product
            );
        },
        increaseQuantityOfProduct(state, action: PayloadAction<number>) {
            state.data.map((product) =>
                product.id === action.payload
                    ? (product.rating.count += 1)
                    : product
            );
        },
        increaseTotalPrice(state, action: PayloadAction<number>) {
            const convertedCurrency = Math.round(action.payload * 91);
            state.totalPrice = state.totalPrice + convertedCurrency;
        },
        reduceTotalPrice(state, action: PayloadAction<number>) {
            const convertedCurrency = Math.round(action.payload * 91);
            state.totalPrice = state.totalPrice - convertedCurrency;
        },
        deleteProduct(state, action: PayloadAction<deleteProductType>) {
            const { id, price, quantity } = action.payload;
            const convertedCurrency = Math.round(price * 91);
            state.data = state.data.filter((product) => product.id !== id);
            state.totalPrice = state.totalPrice - convertedCurrency * quantity;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(GetProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(GetProducts.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            });
    },
});

export const {
    reduceQuantityOfProduct,
    increaseQuantityOfProduct,
    increaseTotalPrice,
    reduceTotalPrice,
    deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
