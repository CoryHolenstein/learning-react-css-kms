import React, { useEffect } from 'react';
import { Stack, Box, Typography, Button, Paper } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import menu from '../assets/menu.json';

const Tab2 = () => {
    function createMenu(menuItems) {
        if (!Array.isArray(menuItems)) {
            console.error('Expected an array but got:', typeof menuItems);
            return null;
        }

        return menuItems.map((menuItem) => (
            <Button key={menuItem.id} sx={{ color: 'black', textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2, margin: 2, borderRadius: 2 }}>
                <Paper elevation={6}>
                    <Box sx={{ backgroundColor: 'red', minHeight: 200, minWidth: 200, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <Stack direction='column' spacing={2}> 
                            <Typography sx={{ fontSize: '35px' }}>
                                {menuItem.name} 
                            </Typography>
                            <Typography sx={{ fontSize: '25px' }}>
                                ${menuItem.price} 
                            </Typography>
                            <Typography sx={{ fontSize: '20px', padding: 2 }}>
                            {menuItem.description} <AddShoppingCartIcon sx={{ fontSize: '25px' }} />
                            </Typography>
                        </Stack>
                    </Box>
                </Paper>
            </Button>
        ));
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2, minHeight: '300px', width: '100%' }}>
            <Stack direction={{ xs: 'column', sm: 'row' }}
                   spacing={{ xs: 1, sm: 2, md: 4 }}>
                {createMenu(menu.menuItems)}
                
            </Stack>
            <Button variant="contained">Checkout</Button>
        </Box>
    );
}

export default Tab2;
