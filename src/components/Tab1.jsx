import { Typography, Stack, Box} from '@mui/material';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';



const Tab1 = () => {

    return(
              <Box sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 2 }}>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1, textDecorationLine: 'underline' }}>    
                                Burgers
                            </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1 }}>
                                Smash Burger
                            </Typography>
                        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1 }}> 
                                $5.00 - double patty, cheddar cheese, grilled onions and smash sauce. Toasted Brioche bun.
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1 }}>
                                Beef Burger
                            </Typography>
                        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1 }}> 
                                $5.00 - single patty, cheddar cheese, lettuce, tomato, ketchup and mustard. Toasted Brioche bun.
                        </Typography>
                    

                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1, textDecorationLine: 'underline' }}>    
                                Sides
                            </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1 }}>
                                Fries
                            </Typography>
                        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1 }}> 
                                $2.00 - Lightly oiled, air-fryed. Seasoned with salt and pepper and garlic seasoning.
                        </Typography>   
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1 }}>
                                Cheese fries
                            </Typography>
                        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1, textAlign: 'center', padding: 1 }}> 
                                $3.00 - Lightly oiled, air-fryed. Seasoned with salt and pepper and garlic seasoning. Mozarella cheese melted on top.
                        </Typography>   
                      
                </Box>

    );




}
export default Tab1;

