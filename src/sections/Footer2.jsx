import React from "react";

const Footer2 = () => {
    return (
        <div className="w-full pt-4 pb-4 bg-black flex gap-2 flex-col items-center">
                <span className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-white">Copyright ©{new Date().getFullYear()}. Desinged by</span>
                <span className="text-white sm:text-lg lg:text-xl 2xl:text-2xl text-opacity-20 font-semibold">DRAGIŠA PETROVIĆ</span>
                
               
            </div>
    )
}
export default Footer2;