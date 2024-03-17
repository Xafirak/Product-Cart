import React from 'react';
import { ProductType } from '../../redux/reducers/productsReducer';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AddDeleteOrRemove from '../UI/AddDeleteOrRemove';
import ExpandedTextWithButton from '../UI/ExpandButton';
import { Box } from '@mui/material';

const Product: React.FC<ProductType> = ({
    id,
    title,
    image,
    description,
    rating,
    price,
}) => {
    const { count } = rating;

    return (
        <Card
            sx={{
                margin: '15px',
                border: '1px solid lightgray',
                maxWidth: 280,
                height: '100%',
            }}
        >
            <CardMedia
                component="img"
                image={image}
                height={200}
                alt={title}
                sx={{ objectFit: 'contain' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>

                <ExpandedTextWithButton text={description} />
                <Box alignSelf={'flex-end'}>
                    <Box display={'flex'}>
                        <Typography marginRight={5} variant="h6">
                            <b>Количество:</b>
                            <Typography>{count}</Typography>
                        </Typography>

                        <Typography variant="h6">
                            <b>Цена: </b>
                            <Typography>{price} $</Typography>
                        </Typography>
                    </Box>
                    <AddDeleteOrRemove ProductID={id} ProductPrice={price} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default Product;
