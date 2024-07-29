import React from "react";

const Accommodation = () => {
  return (
    <div className="w-full sm:mt-[65px] mt-11 flex flex-col items-center">
      <h2
        className="font-[400] sm:text-[60px] text-3xl sm:mt-[15px]"
        style={{ fontFamily: "Parisienne" }}
      >
        Accommodation
      </h2>

      <div className="w-[100%] flex sm:flex-row flex-col items-center sm:justify-between  sm:mt-10 mt-1">
        <div className="sm:w-[30%] w-[95%] sm:mt-[1px] mt-[20px]">
          <h2
            style={{ fontFamily: "Montaga" }}
            className="font-[400] sm:text-[30px] text-[16px]"
          >
            Hotel 1
          </h2>
          <p
            style={{ fontFamily: "Montaga" }}
            className="font-[400] sm:text-[16px] text-[12px]"
          >
            Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
            aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
            quam diam felis, fringilla varius.
          </p>
          <button
            style={{ fontFamily: "Montaga" }}
            className="sm:h-[45px] h-[30px] sm:w-[91px] w-[60px] border mt-2 bg-[#FCF9F7] border-[black] font-[400] sm:text-[22px] text-[14px]"
          >
            Book
          </button>
        </div>

        <div className="sm:w-[30%] w-[95%] sm:mt-[1px] mt-[20px]">
          <h2
            style={{ fontFamily: "Montaga" }}
            className="font-[400] sm:text-[30px] text-[16px]"
          >
            Hotel 2
          </h2>
          <p
            style={{ fontFamily: "Montaga" }}
            className="font-[400] sm:text-[16px] text-[12px]"
          >
            Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
            aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
            quam diam felis, fringilla varius.
          </p>
          <button
            style={{ fontFamily: "Montaga" }}
            className="sm:h-[45px] h-[30px] sm:w-[91px] w-[60px] border mt-2 bg-[#FCF9F7] border-[black] font-[400] sm:text-[22px] text-[14px]"
          >
            Book
          </button>
        </div>

        <div className="sm:w-[30%] w-[95%] sm:mt-[1px] mt-[20px]">
          <h2
            style={{ fontFamily: "Montaga" }}
            className="font-[400] sm:text-[30px] text-[16px]"
          >
            Hotel 3
          </h2>
          <p
            style={{ fontFamily: "Montaga" }}
            className="font-[400] sm:text-[16px] text-[12px]"
          >
            Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
            aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
            quam diam felis, fringilla varius.
          </p>
          <button
            style={{ fontFamily: "Montaga" }}
            className="sm:h-[45px] h-[30px] sm:w-[91px] w-[60px] border mt-2 bg-[#FCF9F7] border-[black] font-[400] sm:text-[22px] text-[14px]"
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
