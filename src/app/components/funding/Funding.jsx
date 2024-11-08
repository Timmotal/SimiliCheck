import React from "react";

const Funding = () => {
  return (
    <div className="flex flex-col  justify-center items-center md:gap-[60px]  gap-5 p-6 mb-10">
    
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-20  md:pb-20 lg:mt-10">
        <div>
        </div>
        <div className="gap-24">
        <p className="SpaceMonoRegular text-[20px]  lg:text-[24px] text-lightGray text-center md:text-left w-full max-w-[500px]">
        Nonprofits create profiles showcasing their mission, needs, and
          milestones driving change.
        </p>
        <p className="SpaceMonoRegular text-[14px] lg:text-[15px] text-lightGray text-center md:text-left w-full max-w-[500px]">
          Socially-conscious investors can browse
          opportunities, support aligned causes, and track impact. An
          intelligent recommendation system matches promising ventures with
          purposeful funders. By enabling collaboration, we aim to accelerate
          solutions to humanity's greatest challenges.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Funding;


