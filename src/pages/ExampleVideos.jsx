import React from "react";
import videoedit from "../images/videoedit.png";
import video1 from "../videos/video1.mp4";
import video2 from "../videos/video2.mp4";
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";
import video5 from "../videos/video5.mp4";
import video6 from "../videos/video6.mp4";
import video7 from "../videos/video7.mp4";
import video8 from "../videos/video8.mp4";
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ExampleVideos = () => {

    return (
        <div className="bg-[#131313] text-white h-max relative" style={{ backgroundImage: `url(${videoedit})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: '1' }}>
            <div className="h-max p-5 bg-black border-b-2 border-white gap-5 md:pl-16 md:pr-16 flex flex-col md:flex-row items-center justify-between">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-bold">Sample Videos</span>
                <div className="flex text-lg font-medium sm:text-2xl flex-col gap-2 items-center">
                    <span className="text-center lg:text-xl xl:text-xl">For more <br /> visit us on:</span>
                    <div className="flex flex-row gap-4">
                        <a href="https://instagram.com/socialhitmakers" target="_blank" className="hover:font-extrabold cursor-pointer">Instagram <LaunchSharpIcon sx={{color:'white'}}/></a>
                        <a href="https://www.tiktok.com/@socialhitmakers" target="_blank" className="hover:font-extrabold cursor-pointer">TikTok <LaunchSharpIcon sx={{color:'white'}}/></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-max p-5 sm:p-16 md:p-24 lg:gap-7 xl:gap-12 xl:p-32 w-full lg:grid gap-12 lg:grid-rows-2 lg:grid-cols-4">
                <div className="border-4 h-max border-white"><video src={video1} controls /></div>
                <div className="border-4 h-max border-white"><video src={video2} controls /></div>
                <div className="border-4 h-max border-white"><video src={video3} controls /></div>
                <div className=" h-max border-4 border-white"><video src={video4} controls /></div>
                <div className="border-4 h-max border-white"><video src={video5} controls /></div>
                <div className="border-4 h-max border-white"><video src={video6} controls /></div>
                <div className="border-4 h-max border-white"><video src={video7} controls /></div>
                <div className="h-max border-4 border-white"><video src={video8} controls /></div>
            </div>
            <div className="py-14 flex flex-row gap-3 items-center justify-center border-t-2 border-white text-white">
            <Button href="/home"
                    variant="contained" 
                    style={{ 
                        color: "black", 
                        backgroundColor: "white", 
                        fontWeight: "bold", 
                        transition: "all 0.3s ease",
                        fontSize: "1.2rem",
                        padding: "10px 20px",
                    }}
                    sx={{
                        "&:hover": {
                            
                            fontWeight: "800",
                            transform: "scale(1.1)",
                        },
                    }}
                >
                   <ArrowBackIcon/> Home
                </Button>
                <Button href="/resume"
                    variant="contained" 
                    style={{ 
                        color: "black", 
                        backgroundColor: "white", 
                        fontWeight: "bold", 
                        transition: "all 0.3s ease",
                        fontSize: "1.2rem",
                        padding: "10px 20px",
                    }}
                    sx={{
                        "&:hover": {
                            
                            fontWeight: "800",
                            transform: "scale(1.1)",
                        },
                    }}
                >
                    Resume <ArrowForwardIcon/>
                </Button>
            </div>
        </div>
    )
}

export default ExampleVideos;
