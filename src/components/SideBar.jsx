import * as React from 'react';
import PropTypes from 'prop-types';
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
const drawerWidth = 240;
const navItems = ['الرئيسية', 'الأهداف', 'المنجزات','الرؤيا','الاستراتيجية','الشراكات','الهياكل','معلومات','اتصل بنا'];
export default function SideBar(props) {
    const { window } = props;
    // const [mobileOpen, setMobileOpen] = React.useState(false);
  
    // const handleDrawerToggle = () => {
    //   setMobileOpen((prevState) => !prevState);
    // };
    // const drawer = (
    //     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    //       <Typography variant="h6" sx={{ my: 2 }}>
    //         MUI
    //       </Typography>
    //       <Divider />
    //       <List>
    //         {navItems.map((item) => (
    //           <ListItem key={item} disablePadding>
    //             <ListItemButton sx={{ textAlign: 'center' }}>
    //               <ListItemText primary={item} />
    //             </ListItemButton>
    //           </ListItem>
    //         ))}
    //       </List>
    //     </Box>
    //   );
      const container = window !== undefined ? () => window().document.body : undefined;
    return (
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
      <Box component="nav">
        <Drawer
        className='sideBar'
        //   container={container}
          variant="temporary"
          open={props.mobileOpen}
          anchor='right'
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
        <Divider />
           <List sx={{ display:'block !important',paddingTop:'20%' }}>
             {navItems.map((item,i) => (
                <>
                {i==0?'':<><Divider />
                <Divider /></>}
               <ListItem key={item} disablePadding sx={{ margin:'0 !important',width:'98%' }} >
               
                 <ListItemButton sx={{ textAlign: 'right',width:'100%',margin:'0'}} className='div0'>
                
                    <a href={'#' + item} className='lienNav'>{item}</a>
                 </ListItemButton>
               </ListItem>
               </>
             ))}
           </List>
        </Drawer>
      </Box>
    </Box>
    )
}
SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
