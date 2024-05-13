import React from "react";
import videoedit from "../images/videoedit.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from "@mui/material";


const ResumePage = () => {
    return (
        <div className="bg-[#131313] text-white h-max relative" style={{ backgroundImage: `url(${videoedit})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.9 }}>
            <div className="absolute inset-0 bg-black opacity-75"></div>
            <div className="flex gap-10 md:gap-14 lg:gap-20 xl:gap-28 p-4 xl:p-16 2xl:p-20 sm:p-6 md:p-10 flex-col relative z-10">
                <span className="text-2xl sm:text-4xl lg:text-6xl md:text-5xl font-extrabold">Leader Resume</span>
                <div className="flex text-base sm:text-lg sm:gap-5 xl:text-xl lg:gap-7 xl:gap-10 gap-4 flex-col">
                    <span style={{ overflowWrap: "break-word" }}>My name is Dragisa Petrovic and I am a Video Editor & Social Media Manager. I’ve just finished online course ( Get Clients Online ),I emerged as one of the top students. </span>
                    <span style={{ overflowWrap: "break-word" }}>At Get Clients Online, I mastered all the skills related to Video Editing,text manipulation,animations,3D animations,sounds adding,nusic adding,stickers,filters,effects,styles and everything you can imagine in one video.I also learned how to revive someone's social media profile, thus achieving better interaction with potential clients and attracting as many people as possible.</span>
                    <span style={{ overflowWrap: "break-word" }}>I was fortunate to receive excellent mentoring from an extremely experienced and competent mentor, so I had a lot to learn from him, and I learned a lot.</span>
                    <span style={{ overflowWrap: "break-word" }}>I learned many crucial things about video editing during the course, such as creating good hooks to grab the viewer's attention right away (like transformations, etc.), then elaborating on the topic where it's essential to showcase the value of the video or the value of your offer if you're selling something, and applying a strategy to attract and sell as much as possible (e.g., offering something for free, but not everything and completely free). Finally, at the end of the video, a crucial element is a call to action (CTA), explaining how viewers can contact you.</span>
                    <span style={{ overflowWrap: "break-word" }}>I’m social media manager.I had so much lessons,so I know hot to managem my client’s social media accounts,save time for them and reborn their content with dialy posts,reels,shorts etc…</span>
                    <span style={{ overflowWrap: "break-word" }}>Also,I’ve learned how to be a content consultant.So I can help you with content ideas to make your videos even better and viral.</span>
                    <span style={{ overflowWrap: "break-word" }}>So, the main task is to convert viewers into "buyers".</span>
                    <span style={{ overflowWrap: "break-word" }}>The videos I provided demonstrate some of my video editing skills, but it works even better with the original video provided by my client, tailored to their desires and instructions.</span>
                    <span style={{ overflowWrap: "break-word" }}>I have successfully edited a lot of videos,so if you are interested I can send you some of them.</span>
                    <span style={{ overflowWrap: "break-word" }}>I am eager to work, I love this job,I’m really enjoying working on it, I learn something new every day, and every day I want to learn something new and stay up-to-date with new technologies.</span>
                    <span style={{ overflowWrap: "break-word" }}>And remember,your ideas and wishes,our realization.</span>
                </div>
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
                <Button href="/sample-videos"
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
                    Sample Videos <ArrowForwardIcon/>
                </Button>
            </div>
        </div>
    );
}
export default ResumePage;
