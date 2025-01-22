import { AppBar, Icon, IconButton, Toolbar, Typography, Box, Button } from "@mui/material/";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <AppBar sx={{ bgcolor: "#595959", position: "fixed", top: 0, left: 0, width: "100%" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ alignContent:'center',flexGrow: 1, textAlign: 'center', padding: 1, justifyContent: 'center', alignItems: 'center' }}>
          Smash Burgers
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
