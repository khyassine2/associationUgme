import Box from '@mui/material/Box';
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Section1() {
  useEffect(()=>
  {
    AOS.init({duration:2000})
  },[])
  return (
    <Box sx={{ marginTop:'5%'}} id='الأهداف' className='section1'>
       <Box sx={{ display:'flex',justifyContent:'center'  }}>
       <Card sx={{ width:'80%',borderRadius:"4px 0px 0px 4px"  }} data-aos='fade-right'> 
            <Typography variant="body" component='section' color="initial" dir='rtl' sx={{ paddingTop:'2%' }} className='content0'>
                <ul style={{ display:'block' }} className='content'>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>المساهمة في دعم وتقوية المقاولات  الصغرى جدا باعتبارها رافعة للتنمية وأحد ركائز الإقتصاد التضامني والإجتماعي .
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> تشجيع وتحفيز الشباب وحاملي المشاريع لولوج عالم المقاولة .
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> زرع روح المقاولة والابتكار لدى الناشئة.
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>مساعدة أصحاب المقاولات الصغرى جدا المنضوين تحت لواء الجمعية في الإدلاء بالتصريحات الضريبية الإستشارات والتوجيهات ومشاركة المعلومات والمستجدات من القوانين خصوصا المتعلقة بمصادر الدعم.
                    </li>
                </ul>
            </Typography>
        </Card>
        <Card sx={{width: '10%',borderRadius:"0px 4px 4px 0px",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14)",paddingTop:"4%"}}  data-aos='fade-left' className='article1'>
              <Typography variant="h4" sx={{transform:"rotate(90deg)",fontSize:'40pt',letterSpacing:'0.5rem'}}>الأهداف</Typography>
        </Card>

       </Box>
    </Box>
  )
}
