import React, { useState } from "react";
import PageLayout2 from "../layouts/layout2";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FAQs = () => {
    // Za svaki FAQ pratimo stanje zasebno
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleFAQ1 = () => {
        setIsOpen1(prevState => !prevState);
    };
    const toggleFAQ2 = () => {
        setIsOpen2(prevState => !prevState);
    };
    const toggleFAQ3 = () => {
        setIsOpen3(prevState => !prevState);
    };
    const toggleFAQ4 = () => {
        setIsOpen4(prevState => !prevState);
    };

    return (
        <PageLayout2>
            <div className="flex flex-col gap-12 w-full h-full 2xl:p-2">
                <span className="font-bold text-4xl sm:text-5xl md:text-5xl lg:text-7xl ">FAQs</span>
                <div className="flex flex-col gap-4 border-b-2 pb-4 border-white border-opacity-30">
                    <div className="flex gap-4 items-center"> 
                        <span className="text-lg font-bold flex-grow">What services do you offer?</span> 
                        <Button sx={{ minWidth: 'auto', minHeight: 'auto' }} onClick={toggleFAQ1}> 
                            {isOpen1 ? <KeyboardArrowDownIcon sx={{ color: 'white' }} /> : <KeyboardArrowUpIcon sx={{ color: 'white' }} />}
                        </Button>
                    </div>
                    {isOpen1 && <span>We offer professional video editing and social media management services for various industries and purposes.</span>}
                </div>
                <div className="flex flex-col gap-4 border-b-2 pb-4 border-white border-opacity-30">
                    <div className="flex gap-4 items-center"> 
                        <span className="text-lg font-bold flex-grow">Do you provide special effects and motion graphics?</span> 
                        <Button sx={{ minWidth: 'auto', minHeight: 'auto' }} onClick={toggleFAQ2}> 
                            {isOpen2 ? <KeyboardArrowDownIcon sx={{ color: 'white' }} /> : <KeyboardArrowUpIcon sx={{ color: 'white' }} />}
                        </Button>
                    </div>
                    {isOpen2 && <span>Yes, our video editing services include special effects and captivating motion graphics.</span>}
                </div>
                <div className="flex flex-col gap-4 border-b-2 pb-4 border-white border-opacity-30">
                    <div className="flex gap-4 items-center"> 
                        <span className="text-lg font-bold flex-grow">How can your services help my business?</span> 
                        <Button sx={{ minWidth: 'auto', minHeight: 'auto' }} onClick={toggleFAQ3}> 
                            {isOpen3 ? <KeyboardArrowDownIcon sx={{ color: 'white' }} /> : <KeyboardArrowUpIcon sx={{ color: 'white' }} />}
                        </Button>
                    </div>
                    {isOpen3 && <span>Through strategic social media management, you can build a community of loyal customers, boost sales, and enhance your brand reputation.</span>}
                </div>
                <div className="flex flex-col gap-4 border-b-2 pb-4 border-white border-opacity-30">
                    <div className="flex gap-4 items-center"> 
                        <span className="text-lg font-bold flex-grow">How important is it to regularly update content on social media?</span> 
                        <Button sx={{ minWidth: 'auto', minHeight: 'auto' }} onClick={toggleFAQ4}> 
                            {isOpen4 ? <KeyboardArrowDownIcon sx={{ color: 'white' }} /> : <KeyboardArrowUpIcon sx={{ color: 'white' }} />}
                        </Button>
                    </div>
                    {isOpen4 && <span>By consistently sharing relevant, engaging, and valuable content, you can strengthen your connection with followers, increase engagement, and establish yourself as an industry expert.</span>}
                </div>
            </div>
        </PageLayout2>
    );
}

export default FAQs;
