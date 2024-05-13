import React from "react";

const PageLayout = ({children}) => {
    return  <div className="w-full bg-[#1F1F1F] h-min flex text-white sm:p-12 md:p-16 lg:p-20 xl:p-20 2xl:p-24 pb-3 p-6">
        {children}
        </div>
}
export default PageLayout;