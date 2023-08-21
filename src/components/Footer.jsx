import Box from '@mui/material/Box';
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Avatar from '@mui/material/Avatar';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
export default function Footer() {
  useEffect(()=>
  {
    AOS.init({duration:2000})
  },[])
  return (
    <Box sx={{marginTop:'10%',backgroundColor:'transparent',position:'relative',bottom:'0'}} id='اتصل بنا'>
       <Card sx={{ height:'25vh' }} dir='rtl'>
          <Box sx={{ width:'100%',display:'flex',flexDirection:'row',justifyContent:'space-around' }}   >
          <Box>
          <Stack direction="row" spacing={2} sx={{ paddingTop:'3%',paddingRight:'4%',width:'100%' }}>
          <FacebookOutlinedIcon/>
          <YouTubeIcon />:
          الإتحاد العام للمقاولات الصغرى جدا UGME
          </Stack>
          <Stack direction="row" spacing={2} sx={{ paddingTop:'1%',paddingRight:'4%' }} dir='rtl'>
          <WhatsAppIcon/>
          <CallIcon />:0639-07-77-17
          </Stack>
          <Stack direction="row" spacing={2} sx={{ paddingTop:'1%',paddingRight:'4%' }} dir='rtl'>
          <LocationOnOutlinedIcon/><span style={{ paddingRight:'12.2%' }}>:21 farah bensoda fes</span>
          </Stack>
          </Box>
          <Box>
          <Stack direction="row" spacing={2} sx={{ paddingTop:'3%',paddingRight:'4%' }} dir='rtl'>
          <FaxIcon /><span >:0532-05-22-39</span>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ paddingTop:'1%',paddingRight:'4%' }} dir='rtl'>
          <EmailIcon /><span >:Contact@ugme.org</span>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ paddingTop:'1%',paddingRight:'4%' }} dir='rtl'>
          <LanguageOutlinedIcon /><span >:www.ugme.org</span>
          </Stack>
          </Box>
          </Box>
          <Typography variant='h5' align="center" sx={{backgroundColor:'#e5e7e6',position:'relative',bottom:'0'}}>الإتحاد العام للمقاولات الصغرى جدا</Typography>
       </Card>
    </Box>
  )
}
