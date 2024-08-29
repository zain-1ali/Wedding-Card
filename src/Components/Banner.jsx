import React from "react";
import banner from "../Imgs/banner.png";

const Banner = ({ cardData }) => {
  const formatDate = (inputDate) => {
    if (inputDate) {
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
    } else {
      return "";
    }
  };
  return (
    <div
      className={`w-[100%] ${
        cardData?.headerImage
          ? "sm:min-h-[100vh] max-h-[300px]"
          : "sm:min-h-[300px] max-h-[150px]"
      }    flex flex-col items-center sm:mt-[70px] mt-10`}
      style={{
        backgroundImage: `url(${cardData?.headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        // objectFit: "contain",
        backgroundColor: cardData?.bgColor,
      }}
    >
      <div className="bg-transparent flex flex-col justify-center items-center sm:mt-4 w-[90%]">
        <p
          className="font-[400] sm:text-[30px] text-[16px]  bg-transparent"
          style={{ color: cardData?.textColor }}
        >
          {cardData?.welcomeText}
        </p>
        <h2
          className="font-[400] sm:text-[70px] text-[36px]  bg-transparent text-center sm:w-[100%] w-[93%]"
          style={{ color: cardData?.textColor }}
        >
          {cardData?.groomName} & {cardData?.brideName}
        </h2>
        <p
          className="font-[400] sm:text-[30px] text-[16px]  bg-transparent"
          style={{ color: cardData?.textColor }}
        >
          {formatDate(cardData?.eventDate)} - {cardData?.location}
        </p>
        {/* 
        <div className="w-[95%] flex justify-center object-cover mt-3">
          <img src={banner} alt="" className="object-cover" />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
