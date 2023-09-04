import React from 'react'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../Header.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
export default function Header(props) {
  const logout=async()=>{
    await signOut(auth);
  }
  return (
    <Box sx={{ flexGrow: 1 }} dir='rtl'>
    <AppBar position="fixed" sx={{ backgroundColor:'#226d68' }}>
      <Toolbar sx={{ display:'flex',flexDirection:'row-reverse',justifyContent:'space-between' }} >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 ,display: { sm: 'none' }}}
          className='menu'
          onClick={props.handleDrawerToggle}
        >
        
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h6" component="div" sx={{ width:'5%',backgroundColor:'red' }}>
        {/* hello   */}
        </Typography>
        <Typography variant="body" component="div" sx={{ width:'70%' }} className='nav'>
           <ul >
                <li> <a href='#الرئيسية'>الرئيسية</a></li>
                <li> <a href='#الأهداف'>الأهداف</a></li>
                <li> <a href='#المنجزات'>المنجزات</a></li>
                <li> <a href='#الرؤيا'>الرؤيا</a></li>
                <li> <a href='#الاستراتيجية'>الاستراتيجية</a></li>
                <li> <a href='#الشراكات'>الشراكات</a></li> 
                <li> <a href='#الهياكل'>الهياكل</a></li>
                <li> <a href='#معلومات عنا'>معلومات عنا</a></li>
                <li> <a href='#اتصل بنا'>اتصل بنا</a></li>
                {props.etat==true? <li> <Link onClick={logout}>تسجيل خروج</Link></li>:<li> <Link to='/login'>تسجيل الدخول</Link></li>}
               
           </ul>
        </Typography>
        <Button color="inherit"  className='logo' sx={{ width:'10%' }}>
          <img src='ugme.jpeg' width='30px' height='30px' />
          <Typography variant="span" color="white" className='logo-text'>
          الإتحاد العام
          </Typography>
          </Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
