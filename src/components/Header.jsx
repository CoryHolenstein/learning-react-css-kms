import { AppBar, Icon, IconButton, Toolbar, Typography, Box, Button } from "@mui/material/";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <AppBar sx={{ bgcolor: "#595959", position: "fixed", top: 0, left: 0, width: "100%" }}>
      <Toolbar>
        <IconButton>
          <MenuIcon sx={{ color: '#000000'}} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Smash Burgers
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Contact</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
