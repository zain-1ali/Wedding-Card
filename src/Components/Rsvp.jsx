import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Rsvp = () => {
  return (
    <div className="w-full sm:mt-[60px] mt-10 flex flex-col items-center">
      <h2
        className="font-[400] sm:text-[60px] text-3xl sm:mt-[15px]"
        style={{ fontFamily: "Parisienne" }}
      >
        Rsvp
      </h2>
      <div className="w-[100%] flex justify-between sm:mt-6 mt-3">
        <div className="sm:w-[49%] w-[48%]">
          <p
            className="font-[400] sm:text-[18px] text-[14px]"
            style={{ fontFamily: "Inter" }}
          >
            First Name
          </p>
          <input
            type="text"
            className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border border-[#696969] mt-1"
          />
        </div>
        <div className="sm:w-[49%] w-[48%]">
          <p
            className="font-[400] sm:text-[18px] text-[14px]"
            style={{ fontFamily: "Inter" }}
          >
            Last Name
          </p>
          <input
            type="text"
            className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border border-[#696969] mt-1"
          />
        </div>
      </div>

      <div className="w-[100%] flex justify-between sm:mt-6 mt-3">
        <div className="w-[100%]">
          <p
            className="font-[400] sm:text-[18px] text-[14px]"
            style={{ fontFamily: "Inter" }}
          >
            Email
          </p>
          <input
            type="text"
            className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border border-[#696969] mt-1"
          />
        </div>
      </div>

      <div className="w-[100%] flex justify-between sm:mt-6 mt-3">
        <div className="w-[100%] ">
          <p
            className="font-[400] sm:text-[18px] text-[14px]"
            style={{ fontFamily: "Inter" }}
          >
            Number of guests
          </p>
          <div className="w-[100%] flex justify-between mt-1">
            <div className="sm:w-[20%] w-[22%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[16px] sm:ml-2 ml-2"
                style={{ fontFamily: "Inter" }}
              >
                One
              </p>
            </div>

            <div className="sm:w-[20%] w-[22%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[16px] sm:ml-2 ml-2"
                style={{ fontFamily: "Inter" }}
              >
                Two
              </p>
            </div>

            <div className="sm:w-[20%] w-[22%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[16px] sm:ml-2 ml-1"
                style={{ fontFamily: "Inter" }}
              >
                Three
              </p>
            </div>

            <div className="sm:w-[20%] w-[22%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[16px] sm:ml-2 ml-2"
                style={{ fontFamily: "Inter" }}
              >
                Four
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-between sm:mt-6 mt-3">
        <div className="w-[100%] ">
          <p
            className="font-[400] sm:text-[18px] text-[14px]"
            style={{ fontFamily: "Inter" }}
          >
            Attendance
          </p>
          <div className="w-[100%] flex justify-between mt-1">
            <div className="sm:w-[49%] w-[48%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[10px] sm:ml-2 ml-2"
                style={{ fontFamily: "Inter" }}
              >
                YES! I WOULDN'T MISS IT!
              </p>
            </div>

            <div className="sm:w-[49%] w-[48%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[10px] sm:ml-2 ml-2"
                style={{ fontFamily: "Inter" }}
              >
                NO, SORRY TO MISS IT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
