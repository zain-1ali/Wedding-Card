import React from "react";
import banner from "../Imgs/banner.png";

const Banner = ({ cardData }) => {
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
    <div
      className="w-[100%] sm:min-h-[100vh] max-h-[300px]  flex flex-col items-center sm:mt-[70px] mt-10 border"
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
      <div className="bg-transparent flex flex-col justify-center items-center sm:mt-4">
        <p
          className="font-[400] sm:text-[30px] text-[16px] text-[#C6754D] bg-transparent"
          style={{ fontFamily: "Montaga" }}
        >
          {cardData?.welcomeText}
        </p>
        <h2
          className="font-[400] sm:text-[70px] text-[40px] text-[#2B1105]  bg-transparent"
          style={{ fontFamily: "Montaga" }}
        >
          {cardData?.groomName} & {cardData?.brideName}
        </h2>
        <p
          className="font-[400] sm:text-[30px] text-[16px] text-[#C6754D] bg-transparent"
          style={{ fontFamily: "Montaga" }}
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
