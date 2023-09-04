import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Stack } from '@mui/system';
import { Avatar, Card } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import { Outlet, useNavigate } from 'react-router-dom';
const drawerWidth = 240;

export default function Dashboard(props) {
    const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuu,SetMenu]=React.useState('none');
  const navigate=useNavigate();
  const handleDrawerToggle = () => {
    SetMenu('block');
  };
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navItems = [ 'الأهداف', 'المنجزات','الرؤيا','الاستراتيجية','الشراكات','الهياكل'];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px`,backgroundColor:'#18534f' }} className='appBar'>
      <Toolbar sx={{ display:'flex',flexDirection:'row-reverse',justifyContent:'space-between' }} className='az'>
      {/* <span></span> */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          className='menu1'
          sx={{ mr: 2,display: { sm: 'none',xs:'block' }}}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photos
        </Typography> */}
        {auth && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
      
    </AppBar>
      <Drawer 
      component="nav"
    //   className='sideBar'
        sx={{
            display:{xs:`${menuu}`,sm:'block'},
        //   width: drawerWidth,
        //   flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        //   display:'block !important',overflowY:'hidden'
        }}
        variant={menuu=='block'?'temporary':'permanent'}
        anchor="right"
        className='dashboardSideBar'
        open={menuu}
        onClose={()=>SetMenu('none')}
        ModalProps={{
            keepMounted: true,
          }}
      >
        <Toolbar sx={{ flexDirection:'row',justifyContent:'end' }}>
             <Stack direction="row-reverse" spacing={2}>
                <Avatar
                alt="Remy Sharp"
                src="/ugme.jpeg"
                sx={{ width: 56, height: 56 ,border:'4px solid snow'}}
                onClick={()=>navigate('/')}
                />
                <Typography variant="body2" dir='rtl' sx={{ pt:'3%' }}>الإتحاد العام للمقاولات الصغرى جدا</Typography>
            </Stack>
        </Toolbar>
       
        <Divider />
        <List sx={{ display:'block !important' }}>
          {navItems.map((text, index) => (
            <>
            {index==0?'':<><Divider />
                <Divider /></>}
            
            <ListItem key={text} disablePadding sx={{ margin:'0 !important',width:'98%' }}>
              <ListItemButton sx={{ textAlign: 'right',width:'100%',margin:'0'}} className='div0'>
                <ListItemText primary={text} onClick={()=>navigate(`/dashboard/${text}`)}/>
              </ListItemButton>
            </ListItem>
            
          </>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{  bgcolor: 'background.default', p: 3,width: `calc(100% - ${drawerWidth}px)` }}
      >
        <Toolbar />
        <Typography component='section' >
            {/* <Stack direction='row' sx={{justifyContent:'space-around'}}>
                <Card sx={{ height:'30vh',width:'30%',background:'linear-gradient(165deg, rgba(34,109,104,0.65) 44%, rgba(236,248,246,1) 100%)' }}>
                    hello
                </Card>
                <Card sx={{  height:'30vh',width:'30%',background: "linear-gradient(165deg, rgba(254,234,161,0.65) 44%, rgba(236,248,246,1) 100%)" }}>
                    hello
                </Card>
                <Card sx={{  height:'30vh',width:'30%',background: "linear-gradient(165deg, rgba(214,149,91,0.65) 44%, rgba(236,248,246,1) 100%)" }}>
                    hello
                </Card>
            </Stack> */}
            {/* <Box variant="outlined" sx={{ border:'1px solid black',borderRaduis:'20px',height:'70vh',backgroundImage:"url('ugme.jpeg')", backgroundPosition: 'center',backgroundSize: '100% 100%',backgroundRepeat:'no-repeat' ,textAlign:'center'}} dir='rtl'>
            <Typography variant="h3" color="initial" sx={{ marginTop:'3%' }}>
            <Typewriter sx={{ color:'red' }} words={['مرحبا بك في الإتحاد العام للمقاولات الصغرى جدا']} loop={6} corsor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </Typography>        
        </Box> */}
        <Outlet />
        </Typography>
        
      </Box>
    </Box>
  )
}
