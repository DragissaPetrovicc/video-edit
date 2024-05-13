import React from "react";
import PageLayout from "../layouts/layout";
import { Button } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


const AboutUs = () =>{
    return (
    
    <PageLayout>
        <div className="flex flex-col gap-12 w-full h-full 2xl:p-12">
                <span className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-7xl">About Us</span>
                <span className="text-base 2xl:leading-10 lg:leading-9 md:leading-8 sm:leading-8 xl:leading-8 sm:text-lg md:text-xl xl:text-2xl">In our team, we combine expertise in video editing with a deep understanding of the dynamics of social media. Every video we create is carefully crafted to capture attention, evoke emotions, and stimulate engagement. <br />
                Our approach is comprehensive - we listen to your desires and needs, analyze the market and trends, and tailor the strategy to reflect your unique story and goals.<br />
                Whether you want to enhance your brand's presence on social media or create original video content that will leave a strong impression, we are here to help you achieve your digital ambitions.</span>
                <div className="flex flex-col sm:flex-row justify-center gap-3 xl:justify-start">
                    <Button href="/resume" sx={{backgroundColor: '#61D7BE', color:'black', width:'min', fontWeight:'bold', '&:hover': {backgroundColor: '#159179'}, '@media (max-width: 1279.98px)': { '&:hover': {transform: 'scale(1)'}}}} variant="contained">Resume  < LaunchIcon/> </Button>
                    <Button href="/sample-videos" sx={{backgroundColor: '#61D7BE', color:'black', width:'min', fontWeight:'bold', '&:hover': {backgroundColor: '#159179'}, '@media (max-width: 1279.98px)': { '&:hover': {transform: 'scale(1)'}}}} variant="contained">Sample Videos <PlayCircleIcon/></Button>
                </div>
            </div>
    </PageLayout>
    
)
    

    
}
export default AboutUs;