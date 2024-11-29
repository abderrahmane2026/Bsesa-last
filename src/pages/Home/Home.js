import React,{ useState } from 'react';
import './Home.css';
import HeroSection from '../../components/Hero/Hero';
import ServiceSection from '../../components/ServicesSection/ServiseSection';
import SecssesSection from '../../components/Sucssessection/SecssesSection';
import BlogsPage from '../../components/BlogsSection/BlogSection';
import ConferenceSection from '../../components/ConferencesSection/ConferencesSection';
import TestSection from '../../components/testSction/Test';
function Home() {

  

  return (
    <div className="">
     <HeroSection/>
      <ServiceSection/>
      <SecssesSection/>

      <BlogsPage/>
     <TestSection/>
      <ConferenceSection/>
     
           </div> 
            
  );
}

export default Home;
