import React from "react";

const Registry = () => {
  return (
    <div className="w-full sm:mt-[65px] mt-11 flex flex-col items-center ">
      <h2
        className="font-[400] sm:text-[60px] text-3xl sm:mt-[15px]"
        style={{ fontFamily: "Parisienne" }}
      >
        Wedding Registry
      </h2>

      <div className="w-[100%] flex mt-10 justify-between">
        <div className="sm:w-[35%] w-[40%] ">
          <h2
            style={{ fontFamily: "Montaga" }}
            className="font-[400] sm:text-[30px] text-[16px]"
          >
            Question 1
          </h2>
          <p
            style={{ fontFamily: "Montaga" }}
            className="font-[400] sm:text-[16px] text-[12px]"
          >
            Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
            aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
            quam diam felis, fringilla varius.
          </p>
        </div>
        <div className="sm:w-[40%] w-[55%] grid grid-cols-2   sm:gap-y-6 sm:gap-x-6 sm:pl-7 sm:pr-0  ">
          {/* <div className="w-[215px] h-[65px] border flex justify-center items-center rounded-[18px] font-[500] text-[18px] hover:bg-[#4C6156] hover:text-white cursor-pointer">
            Brand
          </div>
          <div className="w-[215px] h-[65px] border flex justify-center items-center rounded-[18px] font-[500] text-[18px] hover:bg-[#4C6156] hover:text-white cursor-pointer">
            Brand
          </div>
          <div className="w-[215px] h-[65px] border flex justify-center items-center rounded-[18px] font-[500] text-[18px] hover:bg-[#4C6156] hover:text-white cursor-pointer">
            Brand
          </div>
          <div className="w-[215px] h-[65px] border flex justify-center items-center rounded-[18px] font-[500] text-[18px] hover:bg-[#4C6156] hover:text-white cursor-pointer">
            Brand
          </div> */}
          <div className="sm:w-[215px] sm:h-[65px]  w-[90px] h-[37px] border flex justify-center items-center sm:rounded-[18px] rounded-[12px] font-[500] sm:text-[18px] text-[14px] hover:bg-[#4C6156] hover:text-white">
            Brand 1
          </div>
          <div className="sm:w-[215px] sm:h-[65px]  w-[90px] h-[37px] border flex justify-center items-center sm:rounded-[18px] rounded-[12px] font-[500] sm:text-[18px] text-[14px] hover:bg-[#4C6156] hover:text-white">
            Brand 1
          </div>
          <div className="sm:w-[215px] sm:h-[65px]  w-[90px] h-[37px] border flex justify-center items-center sm:rounded-[18px] rounded-[12px] font-[500] sm:text-[18px] text-[14px] hover:bg-[#4C6156] hover:text-white">
            Brand 1
          </div>
          <div className="sm:w-[215px] sm:h-[65px]  w-[90px] h-[37px] border flex justify-center items-center sm:rounded-[18px] rounded-[12px] font-[500] sm:text-[18px] text-[14px] hover:bg-[#4C6156] hover:text-white">
            Brand 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registry;
