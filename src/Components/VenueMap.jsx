import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "../Styles/DeckSwiper.css";
import ImageSwipper from "./ImageSwipper";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const VenueMap = ({ cardData }) => {
  // const images = [
  //   "https://media.istockphoto.com/id/1399000045/photo/wedding-guests-clapping-hands-as-the-newlywed-couple-walk-down-the-aisle-joyful-bride-and.jpg?s=612x612&w=0&k=20&c=KQLABtP9v0zSmT_pqIqhdRlG-nWIEOUoGFofIxgjlqI=",
  //   "https://images.unsplash.com/photo-1524479967500-c3a0bf56d080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMHZlbnVlfGVufDB8fDB8fHww",
  //   "https://images.unsplash.com/photo-1571268373914-e888c6dafeff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmclMjB2ZW51ZXxlbnwwfHwwfHx8MA%3D%3D",
  // ];

  const swipeHandlers = useSwipeable({
    onSwipedUp: (eventData) => {
      console.log("swipping up");
      const index = parseInt(eventData.event.target.dataset.index, 10);
      handleSwipe(index);
    },
    onSwipedDown: (eventData) => {
      console.log("swipping down");
      const index = parseInt(eventData.event.target.dataset.index, 10);
      handleSwipe(index);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
  });
  const innerWidth = window.innerWidth;
  return (
    <div className="w-[100%] sm:mt-[45px] mt-7">
      <div className="w-[100%] flex justify-center  mb-4 sm:mb-[20px]">
        <p
          className="sm:text-[36px]  text-[28px]  font-[500]  w-[90%] "
          style={{ color: cardData?.textColor }}
        >
          Details
        </p>
      </div>
      <div className="w-full  flex sm:flex-row flex-col  items-center justify-between">
        {innerWidth > 500 && (
          <div className="sm:w-[50%] w-[90%]  flex flex-col items-start pl-[5%]">
            <div>
              <ImageSwipper images={cardData?.detailImages || []} />
            </div>
          </div>
        )}
        <div className="sm:w-[50%] w-[90%]">
          <div className="w-[100%]">
            <h2
              className="font-[400] sm:text-[24px] text-[16px]"
              // style={{ fontFamily: "Inter" }}
            >
              Venue Map
            </h2>
            <p
              className="font-[400] sm:text-[14px] text-[12px] w-[100%] mt-1"
              // style={{ fontFamily: "Inter" }}
            >
              {cardData?.venueMapButtonDesc}
            </p>
            <Link
              activeClass="active"
              to="venue"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                className="w-[110px] h-[40px] bg-black text-white text-[14px]  mt-3"
                // style={{ fontFamily: "Inter" }}
              >
                Map of Venue
              </button>
            </Link>
          </div>

          <div className="w-[100%] mt-5">
            <h2
              className="font-[400] sm:text-[24px] text-[16px]"
              // style={{ fontFamily: "Inter" }}
            >
              Hotels
            </h2>
            <p
              className="font-[400] sm:text-[14px] text-[12px] w-[100%] mt-1"
              // style={{ fontFamily: "Inter" }}
            >
              {cardData?.viewHotelsButtonDesc}
            </p>
            <Link
              activeClass="active"
              to="accomodation"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                className="w-[110px] h-[40px] bg-black text-white text-[14px] mt-3"
                // style={{ fontFamily: "Inter" }}
              >
                View Hotels
              </button>
            </Link>
          </div>

          <div className="w-[100%] mt-5">
            <h2
              className="font-[400] sm:text-[24px] text-[16px]"
              // style={{ fontFamily: "Inter" }}
            >
              Places we Love
            </h2>
            <p
              className="font-[400] sm:text-[14px] text-[12px] w-[100%] mt-1"
              // style={{ fontFamily: "Inter" }}
            >
              {cardData?.seeFavouriteButtonDesc}
            </p>
            <Link
              activeClass="active"
              to="places"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <button
                className="w-[140px] h-[40px] bg-black text-white text-[14px] mt-3"
                // style={{ fontFamily: "Inter" }}
              >
                See our Favorites
              </button>
            </Link>
          </div>
        </div>
        {innerWidth <= 500 && (
          <div className="sm:w-[50%] w-[100%]  flex justify-center mt-10 ">
            <div>
              <ImageSwipper images={cardData?.detailImages || []} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueMap;
