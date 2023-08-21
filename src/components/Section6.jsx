import Box from '@mui/material/Box';
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Section6() {
  useEffect(()=>
  {
    AOS.init({duration:2000})
  },[])
  return (
    <Box sx={{ marginTop:'5%'}} id='الهياكل' className='section6'>
       <Box sx={{ display:'flex',justifyContent:'center'  }}>
       <Card sx={{ width:'80%',height:'42vh',borderRadius:"4px 0px 0px 4px"  }} data-aos='fade-right'> 
            <Typography variant="body" component='section' color="initial" dir='rtl' sx={{ paddingTop:'2%' }}>
                <ul style={{ display:'block' }}>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> الإتحاد العام للمقاولات الصغرى جدا بجهة فاس - مكناس - (الفرع المركزي)
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> الإتحاد العام للمقاولات الصغرى جدا بالجهة الشرقية
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> الإتحاد العام للمقاولات الصغرى جدا بجهة طنجة - الحسيمة</li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> الإتحاد العام للمقاولات الصغرى جدا بجهة سوس - ماسة
                    </li>
                </ul>
            </Typography>
        </Card>
        <Card sx={{width: '10%',borderRadius:"0px 4px 4px 0px",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14)" ,paddingTop:'5%'}}  data-aos='fade-left' className='section6Content'>
              <Typography variant="h3" sx={{transform:"rotate(90deg)",fontSize:'40pt',letterSpacing:'0.5rem'}}>الهياكل</Typography>
        </Card>

       </Box>
    </Box>
  )
}
