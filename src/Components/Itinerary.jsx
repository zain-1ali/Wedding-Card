import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/system";

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

const Itinerary = () => {
  const steps = [
    { event: "welcome cocktail", day: "THURSDAY JULY 10TH 6PM" },
    { event: "REHEARSAL DINNER", day: "FRIDAY JULY 11TH 6PM" },
    { event: "WEDDING DAY", day: " SATURDAY JULY 12TH 12PM" },
    { event: "MACHU PICCHU", day: "SUNDAY/MONDAY JULY 13TH 8AM" },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <div className="w-full sm:mt-[65px] mt-11 flex flex-col items-center">
      <h2
        className="font-[400] sm:text-[60px] text-3xl sm:mt-[15px]"
        style={{ fontFamily: "Parisienne" }}
      >
        The Itinerary
      </h2>
      <div className="w-[100%] sm:mt-[50px] mt-[20px]">
        <Box>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={CustomStepIcon}
                  onClick={handleStep(index)}
                >
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="font-[400] sm:text-[16px] text-[12px]"
                  >
                    {label.event}
                  </p>
                  <p
                    style={{ fontFamily: "Inter" }}
                    className="font-[400] sm:text-[12px] text-[9px]"
                  >
                    {label.day}
                  </p>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <div className="w-[100%] mt-12">
          <div className="w-[100%] flex mt-3">
            <div
              className="w-[20%]  font-[400] sm:text-[24px] text-[14px] "
              style={{ fontFamily: "Montaga" }}
            >
              10am
            </div>
            <div className="w-[80%] ">
              <h2
                style={{ fontFamily: "Montaga" }}
                className="font-[400] sm:text-[30px] text-[16px]"
              >
                Dinner
              </h2>
              <p
                style={{ fontFamily: "Montaga" }}
                className="font-[400] sm:text-[16px] text-[12px]"
              >
                Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
                morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim
                sit. Libero eu euismod risus, mauris etiam ut morbi amet in.
                Tortor duis dignissim adipiscing sem.
              </p>
            </div>
          </div>

          <div className="w-[100%] flex mt-3">
            <div
              className="w-[20%]  font-[400] sm:text-[24px] text-[14px]"
              style={{ fontFamily: "Montaga" }}
            >
              10am
            </div>
            <div className="w-[80%] ">
              <h2
                style={{ fontFamily: "Montaga" }}
                className="font-[400] sm:text-[30px] text-[16px]"
              >
                Dinner
              </h2>
              <p
                style={{ fontFamily: "Montaga" }}
                className="font-[400] sm:text-[16px] text-[12px]"
              >
                Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
                morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim
                sit. Libero eu euismod risus, mauris etiam ut morbi amet in.
                Tortor duis dignissim adipiscing sem.
              </p>
            </div>
          </div>

          <div className="w-[100%] flex mt-3">
            <div
              className="w-[20%]  font-[400] sm:text-[24px] text-[14px]"
              style={{ fontFamily: "Montaga" }}
            >
              10am
            </div>
            <div className="w-[80%]">
              <h2
                style={{ fontFamily: "Montaga" }}
                className="font-[400] sm:text-[30px] text-[16px]"
              >
                Dinner
              </h2>
              <p
                style={{ fontFamily: "Montaga" }}
                className="font-[400] sm:text-[16px] text-[12px]"
              >
                Phasellus accumsan neque viverra ut sem aliquam purus rhoncus,
                morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim
                sit. Libero eu euismod risus, mauris etiam ut morbi amet in.
                Tortor duis dignissim adipiscing sem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
