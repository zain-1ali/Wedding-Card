import React, { useState } from "react";
import b1 from "../Imgs/b1.png";
import b2 from "../Imgs/b2.png";
import b3 from "../Imgs/b3.png";
import b4 from "../Imgs/b4.png";

const BridalParty = ({ cardData }) => {
  const [isMen, setIsMen] = useState(true);

  return (
    <div className="w-full flex justify-center items-center sm:h-[350px] sm:pb-0 pb-2 ">
      <div className="sm:w-[92%] sm:h-[85%] w-[100%]">
        <h2
          className="font-[400] sm:text-[30px] text-[24px] sm:text-start text-center sm:mt-0 mt-[16px]"
          // style={{ fontFamily: "Montaga" }}
        >
          The Bridal Party
        </h2>
        <div className="sm:h-[79%]  w-[100%] sm:mt-[40px] mt-[20px] flex sm:flex-row flex-col sm:items-start items-center sm:justify-between justify-start  ">
          <div className="sm:h-[70%] sm:w-[11%] flex sm:flex-col  sm:gap-0 gap-5  ">
            <h2
              className="pb-1 font-[400] sm:text-[20px] text-[18px] w-max pr-1 cursor-pointer  "
              style={{
                // fontFamily: "Montaga",
                borderBottom: isMen ? `1px solid ${cardData?.textColor}` : null,
              }}
              onClick={() => setIsMen(true)}
            >
              Groomsmen
            </h2>
            <h2
              className="   pb-1 font-[400] sm:text-[20px] text-[18px] w-max pr-1 sm:mt-4 cursor-pointer  "
              style={{
                // fontFamily: "Montaga",
                borderBottom: !isMen
                  ? `1px solid ${cardData?.textColor}`
                  : null,
              }}
              onClick={() => setIsMen(false)}
            >
              Bridemaids
            </h2>
          </div>
          {isMen ? (
            <div className="sm:h-[70%] h-[80vh] sm:w-[85%] flex sm:flex-row flex-col sm:items-start items-center sm:justify-start sm:gap-[10%] gap-5 sm:mt-0 mt-4 ">
              {cardData?.groomsMen?.map((elm) => {
                return (
                  <div className="w-[170px]  flex flex-col justify-center items-center ">
                    <img
                      src={elm?.image}
                      alt=""
                      className="object-cover h-[150px] w-[150px]"
                    />
                    <h2
                      className="text-[18px] font-[400] mt-2"
                      // style={{ fontFamily: "Montaga" }}
                    >
                      {elm?.name}
                    </h2>
                  </div>
                );
              })}

              {/* <div className="w-[170px]  flex flex-col justify-center items-center  bg-[#FCF9F7]">
                <img
                  src={b2}
                  alt=""
                  className="object-cover h-[150px] w-[150px]"
                />
                <h2
                  className="text-[18px] font-[400] mt-2  bg-[#FCF9F7]"
                  // style={{ fontFamily: "Montaga" }}
                >
                  Julian Bernard
                </h2>
              </div>
              <div className="w-[170px]  flex flex-col justify-center items-center  bg-[#FCF9F7]">
                <img
                  src={b3}
                  alt=""
                  className="object-cover h-[150px] w-[150px]"
                />
                <h2
                  className="text-[18px] font-[400] mt-2  bg-[#FCF9F7]"
                  style={{ fontFamily: "Montaga" }}
                >
                  Julian Bernard
                </h2>
              </div>
              <div className="w-[170px]  flex flex-col justify-center items-center  bg-[#FCF9F7]">
                <img
                  src={b4}
                  alt=""
                  className="object-cover h-[150px] w-[150px]"
                />
                <h2
                  className="text-[18px] font-[400] mt-2  bg-[#FCF9F7]"
                  style={{ fontFamily: "Montaga" }}
                >
                  Julian Bernard
                </h2>
              </div> */}
            </div>
          ) : (
            <div className="sm:h-[70%] sm:w-[85%] flex sm:flex-row flex-col sm:items-start items-center sm:justify-start sm:gap-[70px] gap-5 sm:mt-0 mt-4">
              {cardData?.bridesMaids?.map((elm) => {
                return (
                  <div className="w-[170px]  flex flex-col justify-center items-center   ">
                    <img
                      src={elm?.image}
                      alt=""
                      className="object-cover h-[150px] w-[150px]"
                    />
                    <h2
                      className="text-[18px] font-[400] mt-2  "
                      style={{ fontFamily: "Montaga" }}
                    >
                      {elm?.name}
                    </h2>
                  </div>
                );
              })}
              {/* <div className="w-[170px]  flex flex-col justify-center items-center   bg-[#FCF9F7]">
                <img
                  src="https://img.freepik.com/free-photo/close-up-portrait-smiling-wonderful-girl-enjoying-good-day-spring-outdoor-shot-spectacular-lady-casual-clothes-posing-with-pleasure-brick-wall_197531-5077.jpg?size=626&ext=jpg"
                  alt=""
                  className="object-cover h-[150px] w-[150px]"
                />
                <h2
                  className="text-[18px] font-[400] mt-2  bg-[#FCF9F7]"
                  style={{ fontFamily: "Montaga" }}
                >
                  Julian Bernard
                </h2>
              </div>
              <div className="w-[170px]  flex flex-col justify-center items-center  bg-[#FCF9F7]">
                <img
                  src="https://img.freepik.com/free-photo/joyful-lady-black-hat-gloves-playing-with-long-hair-with-forest-background-lovely-girl-wearing-coat-stylish-scarf-smiling-during-walk-autumn-park_291049-1583.jpg?size=626&ext=jpg"
                  alt=""
                  className="object-cover h-[150px] w-[150px]"
                />
                <h2
                  className="text-[18px] font-[400] mt-2  bg-[#FCF9F7]"
                  style={{ fontFamily: "Montaga" }}
                >
                  Julian Bernard
                </h2>
              </div>
              <div className="w-[170px]  flex flex-col justify-center items-center  bg-[#FCF9F7]">
                <img
                  src="https://img.freepik.com/premium-photo/woman-wearing-red-lipstick-sunglasses-is-posing-front-wall_1277187-18558.jpg?size=626&ext=jpg"
                  alt=""
                  className="object-cover h-[150px] w-[150px]"
                />
                <h2
                  className="text-[18px] font-[400] mt-2  bg-[#FCF9F7]"
                  style={{ fontFamily: "Montaga" }}
                >
                  Julian Bernard
                </h2>
              </div>
              <div className="w-[170px]  flex flex-col justify-center items-center  bg-[#FCF9F7]">
                <img
                  src="https://img.freepik.com/free-photo/girl-with-bike_1157-7702.jpg?size=626&ext=jpg"
                  alt=""
                  className="object-cover h-[150px] w-[150px]"
                />
                <h2
                  className="text-[18px] font-[400] mt-2  bg-[#FCF9F7]"
                  style={{ fontFamily: "Montaga" }}
                >
                  Julian Bernard
                </h2>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BridalParty;
