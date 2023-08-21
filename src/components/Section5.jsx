import Box from '@mui/material/Box';
import React, { useRef } from 'react'
import Typography from '@mui/material/Typography'
import { Card } from '@mui/material';
import Carousel from 'react-elastic-carousel'
export default function Section5() {
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
    <Box sx={{ marginTop:'5%' }} id='الشراكات' className='section5'>
       <Card>
       <Typography variant="h3" sx={{ paddingTop:'3%',paddingRight:'1%',textDecoration:'underline' }} align='right'>:الشراكات</Typography>
            <Carousel style={{ paddingTop:'3%' }}  itemsToShow={1} enableAutoPlay autoPlaySpeed={4000} onChange={handleCarouselChange}
            ref={carouselRef}>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='orange.png' width='600' height="200"/>
              </div>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='s1.jpg' width='600' height="200"/>
              </div>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='s.png' width='600' height="200"/>
              </div>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='téléchargement (1).jpg' width='600' height="200"/>
               
              </div>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='darMoqawil.png' width='600' height="200"/>
               
              </div>
              <div style={{ dislay:'flex',flexDirection:'row' }} dir='rtl'>
                <img src='s3.png' width='600' height="200"/>
                
              </div>
          </Carousel>
       </Card>
    </Box>
  )
}
