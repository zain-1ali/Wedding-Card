import React from "react";

const ContactUs = ({ cardData }) => {
  return (
    <div className="w-full sm:mt-[65px] mt-11 flex flex-col items-center ">
      <h2
        className="font-[400] sm:text-[60px] text-3xl sm:mt-[15px]"
        style={{ fontFamily: "Parisienne" }}
      >
        Contact Us
      </h2>

      <div className="w-[100%] mt-1">
        {cardData?.contacts?.map((elm) => {
          return (
            <div className="w-[100%] flex justify-between sm:items-center sm:mt-9 mt-[20px]">
              <div className="w-[50%]">
                <h2
                  style={{ fontFamily: "Montaga" }}
                  className="font-[400] sm:text-[30px] text-[16px]"
                >
                  {elm?.title}
                </h2>
                <p
                  style={{ fontFamily: "Montaga" }}
                  className="font-[400] sm:text-[16px] text-[12px]"
                >
                  {elm?.description}
                </p>
              </div>

              <div
                className="sm:w-[215px] sm:h-[65px]  w-[163px] h-[49px] border flex justify-center items-center rounded-[18px] font-[500] text-[18px]"
                onClick={() => window.open(`tell:${elm?.number}`)}
              >
                Call
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUs;
