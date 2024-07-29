import React from "react";
import logo from "../Imgs/logo.png";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center mt-4">
      <p
        className="sm:text-[18px]  font-light text-[5px] cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        Wedded pair
      </p>
      <p
        className="sm:text-[18px] text-[5px] font-light cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        Venue
      </p>
      <p
        className="sm:text-[18px] text-[5px] font-light cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        Wedding Registry
      </p>
      <p
        className="sm:text-[18px] text-[5px] font-light cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        Accommodation
      </p>
      <p
        className="sm:text-[18px] text-[5px] font-light cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        Rsvp
      </p>
      <img
        src={logo}
        alt="logo"
        className="sm:w-[65px] sm:h-[52px] w-[33px] h-[26px] object-cover"
      />
      <p
        className="sm:text-[18px] text-[5px] font-light cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        Transportation
      </p>
      <p
        className="sm:text-[18px] text-[5px] font-light cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        Things to do
      </p>
      <p
        className="sm:text-[18px] text-[5px] font-light cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        Faq's
      </p>
      <p
        className="sm:text-[18px] text-[5px] font-light cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        Contact Us
      </p>
      <p
        className="sm:text-[18px] text-[5px] font-light cursor-pointer"
        style={{ fontFamily: "Inter" }}
      >
        The Itinerary
      </p>
    </div>
  );
};

export default Header;
