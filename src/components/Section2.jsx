import Box from '@mui/material/Box';
import React, { useRef } from 'react'
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material';
import Carousel from 'react-elastic-carousel'
export default function Section2() {
  const carouselRef = useRef(null);

    const handleCarouselChange = (currentItem, pageIndex) => {
        const totalItems = carouselRef.current.props.children.length;
        if (pageIndex === totalItems - 1) {
            setTimeout(() => {
                carouselRef.current.goTo(0);
            }, 4000); 
        }
    };
  return (
    <Box sx={{marginTop:'5%' }} id='المنجزات' className='section2'>
       <Card >
       <Typography variant="h3" sx={{ paddingTop:'2%',paddingRight:'1%',textDecoration:'underline' }} align='right'>:المنجزات</Typography>
            <Carousel style={{ paddingTop:'4%' }} itemsToShow={1} enableAutoPlay autoPlaySpeed={4000} onChange={handleCarouselChange}
            ref={carouselRef}>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='ugme.jpeg' width='600px' height='250px'/>
                <Typography variant="h6" className='section02Content' >
                احدات مركز فاس المتعدد التخصص
                </Typography>
              </div>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='mo.jpeg' width='600px' height='250px'/>
               <Typography variant="h6" className='section02Content'> العمل على مشروع مؤازرة 1 ومؤازرة 2
لدعم المقاولين والمقاولات ماديا ومعرفيا</Typography>
              </div>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='ugme.jpeg' width='600px' height='250px'/>
               <Typography variant="h6" className='section02Content'>إقامة دورات تكوينية بمجال دعم المشاريع والمقاولات.</Typography>
              </div>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='ugme.jpeg' width='600px' height='250px'/>
                <Typography variant="h6" className='section02Content'>مواكبة مقاولين مستفيدين من برامج دعم :  indh , forsa , intilaka , ctpes M5</Typography>
              </div>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='ugme.jpeg' width='600px' height='250px'/>
                <Typography variant="h6" className='section02Content'>المشاركة بمؤتمرات وملتقيات وندوات دولية ووطنية </Typography>
              </div>
          </Carousel>
       </Card>
    </Box>
  )
}
