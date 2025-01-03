import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-20">
      <div className="w-full flex flex-col justify-center items-center gap-8 mt-10">
      <h3 className="primary text-[28px] lg:text-[32px] text-darkPink  w-full px-4 text-center">
          Our Launch Partners
        </h3>
        <p className="SpaceMonoRegular  text-[14px] lg:text-[15px] text-lightGray w-full max-w-[440px] lg:max-w-[716px] text-center px-4">
          We're piloting Recode in collaboration with these ten incredible
          organizations who will shape the portal based on needs among their own
          users and beneficiaries.
        </p>
        <div className="flex justify-center items-center gap-6 w-screen">
          <img src="/morquee-logo/figma.png" alt="" className="h-[120px]" />
          <img src="/morquee-logo/cola.png" alt="" className="h-[120px]" />
          <img src="/morquee-logo/nike.png" alt="" className="h-[120px]" />
          <img src="/morquee-logo/aws.png" alt="" className="h-[120px]" />
        </div>
      </div>
    </div>
  );
};


