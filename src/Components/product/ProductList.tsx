import React from 'react';
import { useAppSelector } from '../../redux/state/state';
import Product from './Product';
import Box from '@mui/material/Box';

const ProductList: React.FC = () => {
    const products = useAppSelector((state) => state.products.data);

    return (
        <Box display={'flex'} flexWrap={'wrap'}>
            {products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </Box>
    );
};

export default ProductList;
