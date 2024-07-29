import React from "react";
import banner from "../Imgs/banner.png";

const Banner = () => {
  return (
    <div className="w-[100%] flex flex-col items-center sm:mt-10 mt-6">
      <p
        className="font-[400] sm:text-[30px] text-[16px] text-[#C6754D]"
        style={{ fontFamily: "Montaga" }}
      >
        Please join us to celebrate
      </p>
      <h2
        className="font-[400] sm:text-[70px] text-[40px] text-[#2B1105] "
        style={{ fontFamily: "Montaga" }}
      >
        Caleb & Amaya
      </h2>
      <p
        className="font-[400] sm:text-[30px] text-[16px] text-[#C6754D]"
        style={{ fontFamily: "Montaga" }}
      >
        July 15, 2022 - Boise, Idaho
      </p>

      <div className="w-[95%] flex justify-center object-cover mt-3">
        <img src={banner} alt="" className="object-cover" />
      </div>
    </div>
  );
};

export default Banner;
