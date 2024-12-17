import React from "react";

const Roadmap = () => {
  return (
    <div className="w-full  flex flex-col  justify-center items-center gap-12 px-4 mlg:px-[110px]  pb-0 ">
      <div className="flex flex-col justify-center items-center gap-12">
        <h3 className="primary text-[28px] mlg:text-[32px] text-darkPink text-center">
          OUR ROADMAP Over the next year we aim to
        </h3>
        <div className="flex  mlg:flex-col justify-center items-center SpaceMonoRegular text-[14px] mlg:text-[15px] !text-lightGray w-full border-collapse   text-center mlg:text-start ">
          <div className="flex flex-col mlg:flex-row ">
            <div className="  border border-dashed p-4 border-skyBlue w-[170px] h-[210px] md:h-[140px] md:w-[300px] lg:h-[140px] lg:w-[400px] rounded-tl-[16px]  flex flex-col mlg:flex-row   justify-center items-center gap-2 mlg:gap-8 py-2 ">
              <p className="text-darkGray text-[14px] mlg:text-[15px] primary px-[23px] py-[17px]  border-[3px]  border-darkPink bg-skyBlue rounded-full ">
                1
              </p>
              <span className="w-full max-w-[208px]">
              Onboard 100 nonprofits with campaign needs
              </span>
            </div>
         <div className="  border border-dashed p-4 border-skyBlue w-[170px] h-[210px]  md:h-[140px] md:w-[300px] lg:h-[140px] lg:w-[400px]  flex flex-col mlg:flex-row   justify-center items-center gap-2 mlg:gap-8 py-2 ">
              <p className="text-darkGray text-[14px] mlg:text-[15px] primary px-[23px] py-[17px]  border-[3px]  border-darkPink bg-skyBlue rounded-full ">
                2
              </p>
              <span className="w-full max-w-[208px]">
                Recruit 1,000 vetted creatives into active portal participation
              </span>
            </div>
         
          </div>
       
        </div>

        {/* img */}
   
      </div>
    </div>
  );
};

export default Roadmap;
