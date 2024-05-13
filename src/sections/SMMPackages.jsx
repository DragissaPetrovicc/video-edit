import React from "react";
import PageLayout2 from "../layouts/layout2";

const SMMPackages = () => {
    return <PageLayout2>
        <div className="w-full h-min gap-12 md:gap-16 lg:gap-24 flex flex-col xl:hidden">
        <span className="text-left font-extrabold text-xl sm:text-4xl md:text-5xl lg:text-6xl">Social Media Management Services</span>
        <div className="flex flex-col gap-2 md:gap-4"> 
                <img className="obejct-cover rounded-xl transition-all overflow-hidden hover:scale-105 xl:scale-125 xl:hover:scale-125 2xl:hover:scale-150 2xl:scale-150" 
                    src="https://www.internetandtechnologylaw.com/files/2018/10/iStock-929731224-social-media.jpg" alt="" />
                <span className="text-left font-semibold text-lg lg:text-2xl">Creative Content Creation</span>
                <span className="text-left text-base lg:text-lg">Engaging posts and captivating visuals designed to attract and retain a strong online following.</span>
            </div>
            <div className="flex flex-col gap-2 md:gap-4"> 
                <img className="obejct-cover rounded-xl transition-all overflow-hidden hover:scale-105 xl:scale-125 xl:hover:scale-125 2xl:hover:scale-150 2xl:scale-150" 
                    src="https://cdn.durable.co/shutterstock/4cEfxdlUkaKMChy90KqQx3P3mLZWIO0O6kHZvIs5obb9MDHktSMksmUbfxW8ItR7.jpeg" alt="" />
                <span className="text-left font-semibold text-lg lg:text-2xl">Audience Engagement Strategies</span>
                <span className="text-left text-base lg:text-lg">Tailored campaigns to connect with the target audience, encouraging interaction and building brand loyalty.</span>
            </div>   
            <div className="flex flex-col gap-2 md:gap-4"> 
                <img className="obejct-cover rounded-xl transition-all overflow-hidden hover:scale-105 xl:scale-125 xl:hover:scale-125 2xl:hover:scale-150 2xl:scale-150" 
                    src="https://cdn.durable.co/shutterstock/2aP9C1BVtE7L2K8CFWZUq4HHlJfLcG3cFqJDc08Dis0LBE1Io9mrBIeI6WNaqEWn.jpeg" alt="" />
                <span className="text-left font-semibold text-lg lg:text-2xl">Social Media Analytics</span>
                <span className="text-left text-base lg:text-lg">In-depth analysis of key metrics to measure performance, identify trends, and optimize social media strategy.</span>
            </div>
            <div className="flex flex-col gap-2 md:gap-4"> 
                <img className="obejct-cover rounded-xl transition-all overflow-hidden hover:scale-105 xl:scale-125 xl:hover:scale-125 2xl:hover:scale-150 2xl:scale-150" 
                    src="https://img.favpng.com/21/21/5/social-media-marketing-management-digital-media-png-favpng-JpYUnacaTw6A7g2PBrSKNJvUk.jpg" alt="" />
                <span className="text-left font-semibold text-lg lg:text-2xl">Community Management</span>
                <span className="text-left text-base lg:text-lg">Active monitoring, responding, and fostering positive conversations with followers, creating a vibrant online community.</span>
            </div>     
        </div>
        <div className="hidden xl:w-full xl:gap-32 xl:h-full xl:flex xl:flex-col xl:items-center xl:justify-center">
            <span className="text-7xl font-bold pt-24">Social Media Management Services</span>
            <div className="xl:w-full xl:h-min xl:grid xl:grid-cols-2 xl:gap-4">
                <div className=" flex flex-col justify-center items-center gap-4 p-4">
                    <img className="obejct-cover transition-all duration-300 hover:scale-105 rounded-xl h-[700px] w-[680px]" src="https://www.internetandtechnologylaw.com/files/2018/10/iStock-929731224-social-media.jpg" alt="" />
                    <span className="text-center font-semibold text-lg lg:text-2xl">Creative Content Creation </span>
                    <span className="text-center text-base lg:text-lg">Engaging posts and captivating visuals designed to attract and retain a strong online following.</span>
                </div>
                <div className=" flex flex-col justify-center items-center gap-4 p-4">
                    <img className="obejct-cover transition-all duration-300 hover:scale-105 rounded-xl h-[700px] w-[680px]" src="https://cdn.durable.co/shutterstock/4cEfxdlUkaKMChy90KqQx3P3mLZWIO0O6kHZvIs5obb9MDHktSMksmUbfxW8ItR7.jpeg" alt="" />
                    <span className="text-center font-semibold text-lg lg:text-2xl">Audience Engagement Strategies</span>
                    <span className="text-center text-base lg:text-lg">Tailored campaigns to connect with the target audience, encouraging interaction and building brand loyalty.</span>
                </div>
                <div className=" flex flex-col justify-center items-center gap-4 p-4">
                    <img className="obejct-cover transition-all duration-300 hover:scale-105 rounded-xl h-[700px] w-[680px]" src="https://cdn.durable.co/shutterstock/2aP9C1BVtE7L2K8CFWZUq4HHlJfLcG3cFqJDc08Dis0LBE1Io9mrBIeI6WNaqEWn.jpeg" alt="" />
                    <span className="text-center font-semibold text-lg lg:text-2xl">Social Media Analytics</span>
                    <span className="text-center text-base lg:text-lg">In-depth analysis of key metrics to measure performance, identify trends, and optimize social media strategy.</span>
                </div>
                <div className=" flex flex-col justify-center items-center gap-4 p-4">
                    <img className="obejct-cover transition-all duration-300 hover:scale-105 rounded-xl h-[700px] w-[680px]" src="https://img.favpng.com/21/21/5/social-media-marketing-management-digital-media-png-favpng-JpYUnacaTw6A7g2PBrSKNJvUk.jpg" alt="" />
                    <span className="text-center font-semibold text-lg lg:text-2xl">Community Management</span>
                    <span className="text-center text-base lg:text-lg">Active monitoring, responding, and fostering positive conversations with followers, creating a vibrant online community.</span>
                </div>

            </div>
        
            
            
        </div>
    </PageLayout2>
}
export default SMMPackages;