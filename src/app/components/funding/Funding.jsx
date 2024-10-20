import React from "react";

const Funding = () => {
  return (
    <div className="flex flex-col  justify-center items-center md:gap-[60px]  gap-5 p-6 mb-10">
      <div className="flex flex-col text-center md:gap-6 gap-5 w-full max-w-[612px]">
        <h3 className="primary text-[26px] lg:text-[32px] text-darkPink ">
          Conscious Funding
        </h3>
      
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-20  md:pb-20 lg:mt-10">
        <div>
          <img src="/consciousFunding.png" alt="" className="" />
        </div>
     
      </div>
    </div>
  );
};

export default Funding;


