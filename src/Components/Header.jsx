import React from "react";
import logoplchldr from "../Imgs/logoPlchldr.png";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Header = ({ cardData }) => {
  const returnFirstCharacter = (name) => {
    return name?.[0]?.toUpperCase();
  };
  return (
    <div
      className="w-[100%] flex justify-center z-50 fixed "
      style={{ backgroundColor: cardData?.bgColor }}
    >
      <div className="sm:w-[90%]  w-[100%] flex sm:justify-between justify-around items-center sm:h-[70px] h-[40px]   ">
        <Link
          activeClass="active"
          to="detail"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p
            className="sm:text-[18px] text-[5px] font-light cursor-pointer"
            // style={{ fontFamily: "Inter" }}
          >
            Details
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
            // style={{ fontFamily: "Inter" }}
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
            // style={{ fontFamily: "Inter" }}
          >
            The Itinerary
          </p>
        </Link>
        {/* <div className="h-[60px] w-[200px] flex text-[50px] font-bold  items-center justify-evenly relative">
     
          {returnFirstCharacter(cardData?.groomName)}
          <div className="h-[80%] w-[1px] bg-black"></div>
          {returnFirstCharacter(cardData?.brideName)}
        </div> */}
        <img
          src={cardData?.logo || logoplchldr}
          alt="logo"
          className="sm:w-[60px] sm:h-[60px] w-[33px] h-[33px] object-fill"
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
            // style={{ fontFamily: "Inter" }}
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
            // style={{ fontFamily: "Inter" }}
          >
            Contact Us
          </p>
        </Link>
        <Link
          activeClass="active"
          to="registry"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p
            className="sm:text-[18px] text-[5px] font-light cursor-pointer"
            // style={{ fontFamily: "Inter" }}
          >
            Gift Registry
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
