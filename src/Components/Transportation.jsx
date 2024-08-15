import React from "react";
import Slider from "react-slick";

const Transportation = ({ cardData }) => {
  const sliderRef = React.useRef(null);
  // ---------------------for carousel------------------

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: true,
  };

  const steps = [1, 2, 3, 4];

  const innerWidth = window.innerWidth;
  console.log(cardData?.placesWeLove);
  return (
    <>
      <Slider
        ref={sliderRef}
        {...sliderSettings}
        arrows={innerWidth > 500 ? true : false}
        className=" sm:w-[40%]  w-[95%] sm:h-[60%] h-[40%]"
        style={{ backgroundColor: cardData?.bgColor }}
      >
        {cardData?.placesWeLove?.map((step, index) => (
          <div
            className="w-[100%]  sm:h-[100%]  h-[50%]  flex flex-col items-center mt-2"
            style={{ backgroundColor: cardData?.bgColor }}
          >
            <h2
              className="font-[400] sm:text-[60px] text-3xl sm:mt-[30px] z-20 text-center"
              style={{ fontFamily: "Parisienne" }}
            >
              Places We Love
            </h2>

            <div className="w-[100%] flex sm:flex-row flex-col items-center sm:justify-between  sm:mt-10 mt-1 ">
              <div className="sm:w-[100%] w-[95%] sm:mt-[1px] mt-[20px] flex flex-col items-center">
                <h2
                  style={{ fontFamily: "Montaga" }}
                  className="font-[400] sm:text-[30px] text-[16px]"
                >
                  {step?.name}
                </h2>
                <p
                  style={{ fontFamily: "Montaga" }}
                  className="font-[400] sm:text-[16px] text-[12px] w-[90%] text-center"
                >
                  {step?.description}
                </p>
                <button
                  style={{ fontFamily: "Montaga" }}
                  className="sm:h-[45px] h-[30px] sm:w-[91px] w-[60px] border sm:mt-5 mt-2 bg-[#FCF9F7] border-[black] font-[400] sm:text-[22px] text-[14px]"
                >
                  Book
                </button>
              </div>
              {/* 
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
        </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Transportation;
