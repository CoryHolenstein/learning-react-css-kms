import { Typography, Box, Paper, Button, Stack } from '@mui/material';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import menu from '../assets/menu.json';



const Tab1 = () => {


        function createMenu(menuItems) {
                if (!Array.isArray(menuItems)) {
                        console.error('Expected an array but got:', typeof menuItems);
                        return null;
                }

                return menuItems.map((menuItem) => (
   
                        <Paper elevation={6}>
                                <Box sx={{ backgroundColor: 'red', minHeight: 200, minWidth: 200, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <Stack direction='column' spacing={2}> 
                                        <Typography sx={{ fontSize: '35px' }}>
                                        {menuItem.name} 
                                        </Typography>
                                        <Typography sx={{ fontSize: '20px', padding: 2 }}>
                                        {menuItem.description} 
                                        </Typography>
                                        <Typography sx={{ fontSize: '20px', padding: 2 }}>
                                        {menuItem.fullDescription} 
                                        </Typography>
                                </Stack>
                                </Box>
                        </Paper>
                ));
        }
        



    return (
        <Box
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: 2
            }}
        >
            <LunchDiningIcon sx={{ fontSize: 100 }} />
           {createMenu(menu.menuItems)}
        </Box>
    );
}

export default Tab1;


//the idea is we can grab new menu items without having to change the code.