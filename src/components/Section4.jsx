import Box from '@mui/material/Box';
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Section4() {
  useEffect(()=>
  {
    AOS.init({duration:2000})
  },[])
  return (
    <Box sx={{ marginTop:'5%'}} id='الاستراتيجية' className='section4'>
       <Box sx={{ display:'flex',justifyContent:'center'  }}>
       <Card sx={{ width:'80%',borderRadius:"4px 0px 0px 4px"  }} data-aos='fade-right'> 
            <Typography variant="body" component='section' color="initial" dir='rtl' sx={{ paddingTop:'3%' }}>
                <ul style={{ display:'block' }}>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>
                      <b>تعزيز التوعية والتعليم:</b> 
                      تقديم دورات تدريبية وورش عمل لأعضاء الاتحاد حول مهارات إدارة الأعمال والتسويق والمالية  والابتكار، بهدف تعزيز قدراتهم وتطوير مشاريعهم.
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>
                      <b>بناء شبكة اتصال وتعاون:</b> 
                      تنظيم فعاليات شهرية أو ربع سنوية للأعضاء لتبادل الخبرات والأفكار وتوسيع دائرة العلاقات التجارية والتعاون بين المقاولين.
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>
                      <b>تطوير موارد مالية:</b>  
                      بناء خطة لجذب التمويل من مصادر متعددة مثل الحكومة والمنظمات الدولية والقطاع الخاص لدعم مشاريع وبرامج الأعضاء.
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>
                      <b>تقديم استشارات مختصة:</b>  
                      تأسيس فريق من المستشارين المحترفين لتقديم استشارات متخصصة في مجالات مثل التخطيط الاستراتيجي، وإدارة المشروعات، والتمويل، والتسويق.
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>
                      <b>تعزيز الابتكار والتكنولوجيا:</b>   دعم المقاولين في تطبيق أحدث التقنيات والابتكارات في مشاريعهم من خلال ورش العمل والتدريب والشراكات مع شركات تكنولوجيا.
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>
                      <b>الدفاع عن حقوق المقاولين:</b>  العمل على تحسين البيئة التشريعية والتنظيمية للمقاولات الصغرى جدا من خلال التفاوض مع الجهات المعنية والمشاركة في تطوير السياسات والقوانين المتعلقة بالقطاع.
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>
                      <b>تسويق وتعزيز الجمعية:</b> تطوير حملات تسويقية مبتكرة لزيادة الوعي باعمال الإتحاد وجذب مزيد من الأعضاء والشركاء والداعمين.
                    </li>
                    <li style={{ listStyle:'inside',paddingTop:'1%' }}>
                      <b>متابعة وتقييم:</b> إقامة آليات لمتابعة تقدم الأعضاء وقياس تأثير البرامج والمشاريع المنفذة، واستخدام هذه المعلومات لتحسين الأداء واتخاذ القرارات.
                    </li>
                </ul>
                <b style={{paddingRight:'15%' }}>هذه استراتيجية عامة يمكن تخصيصها وتعديلها وفقًا لاحتياجات وأهداف الاتحاد والظروف المحيط بفروعه .</b>
            </Typography>
        </Card>
        <Card sx={{width: '10%',borderRadius:"0px 4px 4px 0px",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14)" ,paddingTop:'4%'}}  data-aos='fade-left' className='section4Content'>
              <Typography variant="h3" sx={{transform:"rotate(90deg)",fontSize:'40pt',letterSpacing:'0.5rem'}}>الاستراتيجية
</Typography>
        </Card>

       </Box>
    </Box>
  )
}
