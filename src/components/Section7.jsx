import Box from '@mui/material/Box';
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Section7() {
  useEffect(()=>
  {
    AOS.init({duration:2000})
  },[])
  return (
    <Box sx={{ marginTop:'5%'}} id='معلومات عنا' className='section7'>
       <Box sx={{ display:'flex',justifyContent:'center'  }}>
       <Card sx={{ width:'90%',height:'42xvh',borderRadius:"4px 0px 0px 4px"  }} data-aos='fade-down-left'> 
            <Typography variant="h3" align='right' sx={{ paddingRight:'2%',paddingTop:'3%', }}>من نحن؟</Typography>
            <Typography variant="body" component='section' color="initial" dir='rtl' sx={{ paddingTop:'2%',width:'96%' }}>
                {/* <ul style={{ display:'block' }}>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> الإتحاد العام للمقاولات الصغرى جدا بجهة فاس - مكناس - (الفرع المركزي)
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> الإتحاد العام للمقاولات الصغرى جدا بالجهة الشرقية
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> الإتحاد العام للمقاولات الصغرى جدا بجهة طنجة - الحسيمة</li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}> الإتحاد العام للمقاولات الصغرى جدا بجهة سوس - ماسة
                    </li>
                </ul> */}
                <p>
        نحن جمعية الإتحاد العام للمقاولات الصغرى جدا"، تأسست في مدينة فاس بتاريخ 03 يوليوز 2020. تأسيسنا يأتي تحت إطار القوانين والأنظمة التي تنظم تكوين وعمل الجمعيات.
      </p>
      <p>
        نحن نلتزم بالمبادئ والأهداف التي تمثلها المشرعية والقوانين. نأخذ إلهامنا من مقتضيات الظهير الشريف رقم 1.58.376 الذي صدر في 3 جمادى الأولى 1378 الموافق 15 نونبر 1958، والذي تم تعديله وتكميله بواسطة الظهير الشريف رقم 1.73:283 المؤرخ في 6 ربيع الأول الموافق 10 أبريل 1993، والذي منح حق تأسيس الجمعيات.
      </p>
      <p>
        نحن نسعى لتحقيق أهدافنا من خلال التزامنا بمقتضيات القانون 75.00 الصادر في 23 يوليوز 2002، الذي أصدر الأمر بتنفيذه بموجب الظهير الشريف رقم 1.02.206. نحن ملتزمون بدعم المقاولات الصغيرة جدا" وتعزيز البيئة الريادية.
      </p>
      <p>
        <b>مقر جمعيتنا يقع في العنوان التالي:</b> 83 درب المزرتب حي الجزيرة، فاس المدينة. نحن نسعى لتقديم الدعم والمساهمة في تنمية المجتمع من خلال تأسيس فروع ومراكز محلية وجهوية ودولية.
      </p>
            </Typography>
        </Card>

       </Box>
    </Box>
  )
}
