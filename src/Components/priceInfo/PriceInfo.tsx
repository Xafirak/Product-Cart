import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useAppSelector } from '../../redux/state/state';
import Box from '@mui/material/Box';

const PriceInfo: React.FC = () => {
    const TotalPrice = useAppSelector((state) => state.products.totalPrice);
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'100vh'}
        >
            <Card
                title="Цена переведена с учетом курса рубля"
                sx={{
                    width: 400,
                    margin: '15px',
                    border: '1px solid lightgray',
                    position: 'fixed',
                }}
            >
                <CardContent
                    style={{ backgroundColor: 'rgba(238, 238, 238, 0.8)' }}
                >
                    <Typography variant="h3" style={{ textAlign: 'center' }}>
                        <b>Итого:</b> <br />
                        {TotalPrice} руб.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PriceInfo;
