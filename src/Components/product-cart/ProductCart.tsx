import React, { useEffect } from 'react';
import ProductList from '../product/ProductList';
import PriceInfo from '../priceInfo/PriceInfo';
import Grid from '@mui/material/Grid';
import { useAppDispatch, useAppSelector } from '../../redux/state/state';
import { GetProducts } from '../../redux/action-creator/getProducts';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ProductCart: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.products.loading);
    const error = useAppSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(GetProducts());
    }, [dispatch]);

    return (
        <>
            {isLoading ? (
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    height={'100vh'}
                >
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    height={'100vh'}
                    color={'red'}
                >
                    <h1>
                        Произошла ошибка!
                        <br />
                        <br />
                        {error}
                    </h1>
                </Box>
            ) : (
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <ProductList />
                    </Grid>
                    <Grid item xs={4}>
                        <PriceInfo />
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default ProductCart;
