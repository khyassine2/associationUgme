import React from 'react'
import Header from './Header';
import Main from './Main';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Footer from './Footer';
import SideBar from './SideBar';
export default function Home(props) {
    const drawerWidth = 240;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    
  return (
    <>
       <Header handleDrawerToggle={handleDrawerToggle} etat={props.etat}/>
      <Main/>
        <SideBar drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} etat={props.etat}/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
    </>
  )
}
