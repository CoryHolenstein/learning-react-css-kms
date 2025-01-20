import * as React from 'react';
import { BottomNavigation, Box } from '@mui/material';

export default function Footer() {
  return (
    <>
      <Box sx={{ bgcolor: "#595959", width: "100vw", position: "fixed", bottom: 0, left: 0 }}>
        <BottomNavigation 
          sx={{ bgcolor: "#595959", height: "50px", width: "100vw", margin: "0" }}>
          <Box sx={{ color: "#ffffff", textAlign: "center", paddingTop: "15px" }}>
            © 2021 Cool Beans
          </Box>
        </BottomNavigation>
      </Box>
    </>
  );
}
