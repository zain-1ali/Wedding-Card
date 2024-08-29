import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Faq = ({ cardData }) => {
  const [show, setShow] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  return (
    <div className="w-full sm:mt-[65px] mt-11 flex flex-col items-center">
      <h2
        className="font-[400] sm:text-[60px] text-3xl sm:mt-[15px] z-20"
        // style={{ fontFamily: "Parisienne" }}
      >
        Faq's
      </h2>
      <div className="w-[100%] grid grid-cols-1">
        {cardData?.faqs?.map((elm, i) => {
          return (
            <div className="w-[95%] sm:mt-9 mt-[20px]">
              <div className="w-[100%] flex justify-between">
                <h2
                  // style={{ fontFamily: "Montaga" }}
                  className="font-[400] sm:text-[30px] text-[16px]"
                >
                  {elm?.question}
                </h2>
                {show && clickedIndex === i ? (
                  <RxCross1
                    className="sm:text-[30px] text-[25px] cursor-pointer"
                    onClick={() => setShow(false)}
                  />
                ) : (
                  <IoMdAdd
                    className="sm:text-[35px] text-[25px] cursor-pointer"
                    onClick={() => {
                      setShow(true), setClickedIndex(i);
                    }}
                  />
                )}
              </div>
              {show && clickedIndex === i && (
                <p
                  // style={{ fontFamily: "Montaga" }}
                  className="font-[400] sm:text-[16px] text-[12px] mt-3"
                >
                  {elm?.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
