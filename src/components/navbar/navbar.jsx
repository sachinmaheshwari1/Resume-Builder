import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;


function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" >
    RESUME BUILDER
    </Typography>
    <Divider />
    <List>
      
        <ListItem  disablePadding sx={{ textAlign: 'center' }}>
          <ListItemButton sx={{ textAlign: 'center' }}>
           
            <Link to="/" style={{textDecoration:"none"}}>
              <Button  sx={{ color: 'black' }}>
               Resume templates
             </Button>
              </Link>
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
           
         
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
           
            <Link to="/AboutUs" style={{textDecoration:"none"}}>
              <Button  sx={{ color: 'black' }}>
              About us
             </Button>
              </Link>
          </ListItemButton>
        </ListItem>
     
     
    </List>
  </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} mb={2} height={80}>
      <CssBaseline />
      <AppBar component="nav" color="inherit" position='fixed' >
      
        <Toolbar>
        <Typography
            variant="h5"
            align='left'
            sx={{ flexGrow: 1, display: {  sm: 'block' } }}
          >
            RESUME BUILDER
          </Typography>
       
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            
              <Link to="/" style={{textDecoration:"none"}}>
              <Button  sx={{ color: 'black' }}>
               Resume templates
             </Button>
              </Link>
            
              <Link to="/AboutUs" style={{textDecoration:"none"}}>
              <Button  sx={{ color: 'black' }}>
              About us
             </Button>
              </Link>
             
          
          </Box>
        </Toolbar>
      </AppBar >
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}



export default DrawerAppBar;