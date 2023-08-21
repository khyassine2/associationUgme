import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Typewriter } from 'react-simple-typewriter';
import Typography from '@mui/material/Typography'
export default function Main() {
  return (
    // <Box sx={{ marginTop:'7%',marginLeft:'1%' }}>
    //     hello
    // </Box>
    <Box sx={{ marginTop:'8%' }} id='الرئيسية' className='head'>
        <Box variant="outlined" sx={{ border:'1px solid black',borderRaduis:'20px',height:'70vh',backgroundImage:"url('ugme.jpeg')", backgroundPosition: 'center',backgroundSize: '100% 100%',backgroundRepeat:'no-repeat' ,textAlign:'center'}} dir='rtl'>
            <Typography variant="h3" color="initial" sx={{ marginTop:'3%' }}>
            <Typewriter sx={{ color:'red' }} words={['مرحبا بك في  الإتحاد العام للمقاولات الصغرى جدا ',' و شكرا على زيارتكم ' ]} loop={6} corsor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </Typography>        
        </Box>
    </Box>
  )
}
