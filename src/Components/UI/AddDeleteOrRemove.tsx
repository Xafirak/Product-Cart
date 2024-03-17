import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField/TextField';
import { Stack, Tooltip } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { useAppDispatch } from '../../redux/state/state';
import {
    deleteProduct,
    increaseQuantityOfProduct,
    increaseTotalPrice,
    reduceQuantityOfProduct,
    reduceTotalPrice,
} from '../../redux/reducers/productsReducer';

interface AddDeleteOrRemoveProps {
    ProductID: number;
    ProductPrice: number;
}

const AddDeleteOrRemove: React.FC<AddDeleteOrRemoveProps> = ({
    ProductID,
    ProductPrice,
}) => {
    const [quantity, setQuantity] = useState(0);
    const dispatch = useAppDispatch();

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity((quantity) => quantity - 1);
            dispatch(increaseQuantityOfProduct(ProductID));
            dispatch(reduceTotalPrice(ProductPrice));
        }
    };
    const handleIncreaseQuantity = () => {
        if (quantity < 10) {
            setQuantity((quantity) => quantity + 1);
            dispatch(reduceQuantityOfProduct(ProductID));
            dispatch(increaseTotalPrice(ProductPrice));
        }
    };
    const handDeleteProduct = () => {
        dispatch(
            deleteProduct({
                id: ProductID,
                price: ProductPrice,
                quantity: quantity,
            })
        );
    };

    return (
        <Stack margin={1} justifyContent={'center'} direction="row" spacing={1}>
            <IconButton
                color="primary"
                aria-label="Уменьшить"
                onClick={handleDecreaseQuantity}
                disabled={quantity === 0}
            >
                <RemoveIcon />
            </IconButton>
            <TextField
                color="info"
                style={{ width: 60 }}
                id="outlined-size-small"
                type="number"
                size="small"
                value={quantity}
                inputProps={{ readOnly: true }}
            />
            <IconButton
                color="primary"
                aria-label="Увеличить"
                onClick={handleIncreaseQuantity}
                disabled={quantity === 10}
            >
                <AddIcon />
            </IconButton>
            <Tooltip title="Удалить товар">
                <IconButton
                    color="primary"
                    style={{ pointerEvents: 'auto' }}
                    aria-label="Увеличить"
                    onClick={handDeleteProduct}
                >
                    <DeleteForever />
                </IconButton>
            </Tooltip>
        </Stack>
    );
};

export default AddDeleteOrRemove;
