import React from "react";
import images from "../images/logo.png";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="h-min p-3 bg-[#0d0d0d] text-white flex flex-col gap-4 sm:gap-7 md:gap-10 lg:gap-14 xl:gap-20 ">
            <div className="flex w-full pr-5 flex-row justify-center items-center">
                <img className="w-[65px] h-[65px] sm:w-[100px] sm:h-[100px] lg:h-[120px] lg:w-[120px] xl:w-[150px] xl:h-[150px] object-cover" src={images}/>
                <span className="font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Social Hitmakers</span>
            </div>
            
            <div className="xl:flex xl:flex-row xl:justify-center xl:items-start xl:gap-16">
               <div className="flex flex-col text-sm xl:flex-row sm:flex-row sm:justify-around sm:text-xl md:text-2xl lg:text-3xl lg:font-semibold xl:gap-16">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4 pl-4 justify-start">
                        <span><CallIcon/></span>
                        <span>+387 65 079 865</span>
                    </div>
                    <div className="flex flex-row gap-4 pl-4 justify-start">
                        <MailOutlineSharpIcon/>
                        <span>dragisapetrovic@d-petrovic.com</span>
                    </div>
                </div>

                <div className="flex flex-row gap-2 pr-5 sm:flex-col sm:items-start justify-around pl-4 ">
                    <a href="https://www.tiktok.com/@socialhitmakers" target="_blank" className="hover:font-bold cursor-pointer lg:hover:font-extrabold">TikTok <LaunchSharpIcon sx={{color:'white'}}/></a>
                    <a href="https://instagram.com/socialhitmakers" target="_blank" className="hover:font-bold cursor-pointer lg:hover:font-extrabold">Instagram <LaunchSharpIcon sx={{color:'white'}}/></a>
                </div>
            </div>    

            <div className="flex flex-col pl-4 pt-7 pb-4 xl:font-semibold sm:pt-10 md:pt-12 lg:pt-16 xl:pt-0 2xl:pt-0 gap-2 sm:items-center sm:text-lg md:text-xl lg:text-2xl">
                <Link to="header" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">Home</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">About Us</Link>
                <Link to="services" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">Video Editing Service</Link>
                <Link to="services2" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">Social Media Management Services</Link>
                <Link to="faqs" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">FAQs</Link>
                <a href="/sample-videos" className="hover:underline cursor-pointer">Sample Videos</a>
                <a href="/resume" className="hover:underline cursor-pointer">Resume</a>
            </div> 
            </div>
            
        </div>
    );
}

export default Footer;
