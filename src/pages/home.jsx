import React from "react";
import Header from '../sections/header';
import Section1 from "../sections/firstSection";
import Section2 from "../sections/secondSection";
import VideoEditCorePackages from "../sections/VideoEditingCorePackages";
import SMMPackages from "../sections/SMMPackages";
import FAQs from "../sections/FAQs";
import Footer from "../sections/Footer";
import Footer2 from "../sections/Footer2";
import { Element } from "react-scroll";
import AboutUs from "../sections/About";

const Home = () => {
 
  return (
  <>
    <Element name="header" className="element">
      <Header/>
    </Element>

    <Element name="section1" className="element">
      <Section1/>
    </Element>

    <Element  name="section2" className="element">
      <Section2/>
    </Element>

    <Element name="services" className="element">
      <VideoEditCorePackages/>
    </Element>

    
    <Element name="services2" className="element"> 
      <SMMPackages/>
    </Element>

    <Element name="about" className="element">
      <AboutUs/>
    </Element>

    <Element name="faqs" className="element">
      <FAQs/>
    </Element>

    <Element name="contact" className="element">
      <Footer/>
    </Element>

    <Footer2/>
  </>
   
  );
};

export default Home;
