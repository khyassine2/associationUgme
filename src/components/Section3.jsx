import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Section3() {
  useEffect(()=>
  {
    AOS.init({duration:2000})
  },[])
  return (
    <Box sx={{ marginTop:'5%'}} id='الرؤيا' className='section3'>
       <Box sx={{ display:'flex',justifyContent:'center'  }}>
       <Card sx={{ width:'80%',borderRadius:"4px 0px 0px 4px"  }} data-aos='fade-right'> 
            <Typography variant="body" component='section' color="initial" dir='rtl' sx={{ paddingTop:'5%' }}>
                <ul style={{ display:'block' }}>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>يسعى الاتحاد العام للمقاولات الصغرى جدا من خلال اهدافه إلى أن يكون القوة الرائدة في دعم وتمكين رواد الأعمال والمقاولين الصغار جدا باعتبارهم السواد الأعظم من المقاولات بالمغرب ، ودالك من خلال توفير بيئة ريادة اعمال محفزة للابتكار والتطور والتعلم المستمر. </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> ونسعى كدالك لتعزيز الشفافية والمسؤولية ونبني معايير احترافية عالية، مما يسهم في نمو قطاع المقاولات ويساهم في تحقيق الاستدامة الاقتصادية والاجتماعية.  </li>
                  
                </ul>
            </Typography>
        </Card>
        <Card sx={{width: '10%',borderRadius:"0px 4px 4px 0px",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14)",paddingTop:'4%'}}  data-aos='fade-left' className='section3Content'>
              <Typography variant="h3" sx={{transform:"rotate(90deg)",fontSize:'40pt',letterSpacing:'0.5rem'}}>الرؤيا</Typography>
        </Card>

       </Box>
    </Box>
  )
}
