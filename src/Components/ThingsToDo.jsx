import React from "react";
import ttd from "../Imgs/ttd.png";

const ThingsToDo = () => {
  return (
    <div className="w-full sm:mt-[65px] mt-11 flex flex-col items-center">
      <h2
        className="font-[400] sm:text-[60px] text-3xl sm:mt-[15px]"
        style={{ fontFamily: "Parisienne" }}
      >
        Things to do
      </h2>
      <div className="sm:w-[100%] w-[95%] flex justify-between">
        <div className="w-[50%]">
          <div className="w-[100%] sm:mt-9 mt-[20px]">
            <h2
              style={{ fontFamily: "Montaga" }}
              className="font-[400] sm:text-[30px] text-[16px]"
            >
              Activity 1
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

          <div className="w-[100%] sm:mt-9 mt-[20px]">
            <h2
              style={{ fontFamily: "Montaga" }}
              className="font-[400] sm:text-[30px] text-[16px]"
            >
              Activity 2
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

          <div className="w-[100%] sm:mt-9 mt-[20px]">
            <h2
              style={{ fontFamily: "Montaga" }}
              className="font-[400] sm:text-[30px] text-[16px]"
            >
              Activity 3
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

          <div className="w-[100%] sm:mt-9 mt-[20px]">
            <h2
              style={{ fontFamily: "Montaga" }}
              className="font-[400] sm:text-[30px] text-[16px]"
            >
              Activity 4
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

          <div className="w-[100%] sm:mt-9 mt-[20px]">
            <h2
              style={{ fontFamily: "Montaga" }}
              className="font-[400] sm:text-[30px] text-[16px]"
            >
              Activity 5
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
        </div>
        <div className="w-[40%] ">
          <img src={ttd} alt="" className="sm:mt-6 mt-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo;
