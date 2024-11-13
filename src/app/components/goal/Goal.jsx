import React from "react";

const Goal = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-center items-center gap:20 md:gap-8  mlg:gap-[120px] p-6 my-10  md:pl-10"
      id="goal"
    >
      <div className="w-full lg:max-w-[590px] flex flex-col md:items-start justify-center items-center lg:justify-start lg:items-start   gap-6 md:w-full md:max-w-[300px]  ">
     
       
      </div>
      <div className="w-[297px] h-[286px] lg:w-[450px] lg:h-[450px] mt-14">
        <img src="/goal.png" alt="goal.png" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Goal;
