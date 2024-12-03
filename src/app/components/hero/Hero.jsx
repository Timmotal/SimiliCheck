import React from "react";
import Chatbot from "../Chatbot";

const Hero = () => {
  return (
    <div className="relative  xlg:h-[74vh]  w-screen text-lightGray flex flex-col justify-center items-center pt-32 lg:pt-28 xlg:pt-20">
    <div className="w-full object-fill lg:max-w-[1200px] md:px-4 relative xlg:max-w-[1450px]">
      <img
        src="/hero-bg.png"
        alt="bgImg"
        className="w-full h-[260px] md:h-[440px] lg:h-full object-cover"
      />
      <p className="absolute inset-x-0 -bottom-6 md:bottom-10  lg:bottom-0 SpaceMonoRegular text-center text-[14px] lg:text-[20px]  uppercase mx-auto max-w-[290px] mlg:max-w-[440px] ">
        Connecting nonprofits, creatives, and philanthropists from around the
        cosmos to accelerate collaboration and amplify impact.
      </p>
    </div>
    <Chatbot />
    <div className="relative overflow-hidden flex flex-col justify-center items-center gap-2 my-10">
        <div className="h-1 w-screen bg-darkPink"></div>
        <div className="relative overflow-hidden w-screen text-center">
          <div className="inline-block whitespace-nowrap animate-marquee text-[40px]">
            <p className="inline-block primary text-transparent  ">
              <span className="text-stroke-red-500 text-skyBlue ">
                PROJECT_ RECODE THE PLANET. Connecting nonprofits, creatives, and philanthropists
                 from around the globe to accelerate collaboration and amplify impact.
              </span>
              {/* Duplicate the text to continue seamlessly */}
              <span className="text-stroke-red-500 text-skyBlue">
              PROJECT_ RECODE THE PLANET. Connecting nonprofits, creatives, and philanthropists
                 from around the globe to accelerate collaboration and amplify impact.
              </span>
              <span className="text-stroke-red-500 text-skyBlue">
              PROJECT_ RECODE THE PLANET. Connecting nonprofits, creatives, and philanthropists
                 from around the globe to accelerate collaboration and amplify impact.
              </span>
              <span className="text-stroke-red-500 text-skyBlue">
              PROJECT_ RECODE THE PLANET. Connecting nonprofits, creatives, and philanthropists
                 from around the globe to accelerate collaboration and amplify impact.
              </span>
            </p>
          </div>
        </div>
        <div className="h-1 w-screen bg-darkPink"></div>
      </div>
  </div>
  
  );
};

export default Hero;



