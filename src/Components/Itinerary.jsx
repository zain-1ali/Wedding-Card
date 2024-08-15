import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/system";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// Custom StepIcon component
const CustomStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: ownerState.active ? "black" : "transparent",
  border: ownerState.active ? "none" : "2px solid black",
  zIndex: 1,
  color: ownerState.active ? "white" : "black",
  width: 22,
  height: 22,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
}));

function CustomStepIcon(props) {
  const { active, className } = props;

  return <CustomStepIconRoot ownerState={{ active }} className={className} />;
}

const Itinerary = ({ cardData }) => {
  const steps = [
    { event: "welcome cocktail", day: "THURSDAY JULY 10TH 6PM" },
    { event: "REHEARSAL DINNER", day: "FRIDAY JULY 11TH 6PM" },
    { event: "WEDDING DAY", day: " SATURDAY JULY 12TH 12PM" },
    { event: "MACHU PICCHU", day: "SUNDAY/MONDAY JULY 13TH 8AM" },
  ];

  const itinerary = Object.values(cardData?.itinerary);

  // ---------------------for stepper------------------

  const [activeStep, setActiveStep] = React.useState(0);

  const sliderRef = React.useRef(null);

  const handleStep = (step) => () => {
    setActiveStep(step);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(step);
    }
  };

  // ---------------------for carousel------------------

  const handleSliderChange = (index) => {
    setActiveStep(index);
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: handleSliderChange,
    // arrows: true,
  };

  const innerWidth = window.innerWidth;

  // ------------------------------------------To format time----------------------------------------
  const convertToAmPm = (time) => {
    // Split the time into hours and minutes
    let [hours, minutes] = time.split(":");

    // Convert hours from string to number
    hours = parseInt(hours);

    // Determine AM or PM
    const period = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12 || 12; // Adjust for 0 (midnight) and 12 (noon)

    // Return the formatted time
    return `${hours}:${minutes} ${period}`;
  };

  // ------------------------------------------To format date----------------------------------------

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    // Return the formatted date
    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="w-full sm:mt-[65px] mt-11 flex flex-col items-center mb-7">
      <style>
        {`
          .slick-prev, .slick-next {
            width: 50px;
            height: 50px;
            z-index: 1;
            display: block !important; /* Ensure the arrows are always displayed */
          }

          .slick-prev::before, .slick-next::before {
            font-size: 50px;
            color: black; /* Change arrow color here */
          }

          .slick-prev {
            left: -60px; /* Adjust position as needed */
          }

          .slick-next {
            right: -60px; /* Adjust position as needed */
          }
        `}
      </style>
      <h2
        className="font-[400] sm:text-[60px] text-3xl sm:mt-[15px]"
        style={{ fontFamily: "Parisienne" }}
      >
        The Itinerary
      </h2>
      <div className="w-[100%] sm:mt-[50px] mt-[20px]">
        <Box>
          <Stepper alternativeLabel activeStep={activeStep}>
            {itinerary.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={CustomStepIcon}
                  onClick={handleStep(index)}
                >
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="font-[400] sm:text-[16px] text-[12px]"
                  >
                    {label.title}
                  </p>
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="font-[400] sm:text-[12px] text-[9px]"
                  >
                    {formatDate(label?.date)} {convertToAmPm(label?.time)}
                  </p>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <div className="w-[100%] flex justify-center items-center">
          {/* <MdOutlineKeyboardArrowLeft className="text-[50px]" /> */}
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            arrows={innerWidth > 500 ? true : false}
            className=" sm:w-[95%] w-[100%] sm:pl-5"
          >
            {itinerary?.map((step, index) => (
              <div className="w-[100%] mt-12" key={index}>
                {step?.activities &&
                  step?.activities?.map((elm) => {
                    return (
                      <div className="w-[100%] flex mt-3">
                        <div
                          className="w-[20%]  font-[400] sm:text-[24px] text-[14px] "
                          style={{ fontFamily: "Montaga" }}
                        >
                          {convertToAmPm(elm?.time)}
                        </div>
                        <div className="w-[80%] ">
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
                      </div>
                    );
                  })}
              </div>

              // <div key={index}>{index}</div>
            ))}
          </Slider>
          {/* <MdOutlineKeyboardArrowRight className="text-[50px]" /> */}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
