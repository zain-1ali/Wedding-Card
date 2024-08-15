import React from "react";
import logo from "../Imgs/logo.png";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Header = ({ cardData }) => {
  return (
    <div
      className="w-[100%] flex justify-center z-50 fixed"
      style={{ backgroundColor: cardData?.bgColor }}
    >
      <div className="sm:w-[90%]  w-[100%] flex sm:justify-between justify-around items-center sm:h-[70px] h-[40px]   ">
        <Link
          activeClass="active"
          to="venue"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p
            className="sm:text-[18px] text-[5px] font-light cursor-pointer"
            style={{ fontFamily: "Inter" }}
          >
            Venue
          </p>
        </Link>
        <Link
          activeClass="active"
          to="rsvp"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p
            className="sm:text-[18px] text-[5px] font-light cursor-pointer ml-1"
            style={{ fontFamily: "Inter" }}
          >
            Rsvp
          </p>
        </Link>
        <Link
          activeClass="active"
          to="itinerary"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p
            className="sm:text-[18px]  font-light text-[5px] cursor-pointer ml-1"
            style={{ fontFamily: "Inter" }}
          >
            The Itinerary
          </p>
        </Link>

        <img
          src={logo}
          alt="logo"
          className="sm:w-[65px] sm:h-[52px] w-[33px] h-[26px] object-cover"
        />
        <Link
          activeClass="active"
          to="faq"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p
            className="sm:text-[18px] text-[5px] font-light cursor-pointer"
            style={{ fontFamily: "Inter" }}
          >
            Faq's
          </p>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p
            className="sm:text-[18px] text-[5px] font-light cursor-pointer"
            style={{ fontFamily: "Inter" }}
          >
            Contact Us
          </p>
        </Link>
        <Link
          activeClass="active"
          to="gift"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p
            className="sm:text-[18px] text-[5px] font-light cursor-pointer"
            style={{ fontFamily: "Inter" }}
          >
            Gift Registry
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
