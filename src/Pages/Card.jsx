import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Venue from "../Components/Venue";
import Rsvp from "../Components/Rsvp";
import Itinerary from "../Components/Itinerary";
import Accommodation from "../Components/Accommodation";
import Trnsportation from "../Components/Transportation";
import ThingsToDo from "../Components/ThingsToDo";
import Faq from "../Components/Faq's";
import ContactUs from "../Components/ContactUs";
import Registry from "../Components/Registry";
import VenueMap from "../Components/VenueMap";
import BridalParty from "../Components/BridalParty";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useParams } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";

const Card = () => {
  const { id } = useParams();
  console.log(id);

  const [cardData, setCardData] = useState({});

  let baseUrl = import.meta.env.VITE_BASE_URL;

  // --------------------------------socket implementation for realtime changes in web page-------------------------------

  const socket = io("https://thewelcomepass-cf3f2175b9ff.herokuapp.com"); // Connect to the server

  useEffect(() => {
    // Join the room associated with this card ID
    socket.emit("joinRoom", cardData?._id);

    // Listen for updates to this specific card
    socket.on("weddingCardUpdated", (data) => {
      setCardData(data); // Update state with new data
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.off("weddingCardUpdated");
    };
  }, [cardData?._id]);

  //-------------------------------getting card data------------------------
  useEffect(() => {
    const gettingCardData = async () => {
      const response = await axios.get(`${baseUrl}/card/getCard/${id}`);
      if (response.data.status === true) {
        setCardData(response.data.data);
        console.log(response.data.data);
      }
    };
    gettingCardData();
  }, []);

  // check if component on the top of card

  const checkIfOnTop = (number, order) => {
    if (order?.[0] === number) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      className="w-[100%] min-h-screen  flex items-center flex-col"
      style={{ color: cardData?.textColor, fontFamily: cardData?.font }}
    >
      <div
        className="w-[100%] "
        style={{
          backgroundColor: cardData?.bgColor,
          color: cardData?.textColor,
        }}
      >
        <Header cardData={cardData} />
      </div>

      <div
        className="h-[100%] sm:w-[100%] w-[100%]  flex flex-col items-center"
        style={{ backgroundColor: cardData?.bgColor }}
      >
        {/* hidebanner: false, hideDetails: false, hideVenue: false,
        hideBridalParty: false, hideAccomodation: false, hidePlaces: false,
        hideItinerary: false, hideRsvp: false, hidefaqs: false, hideConactUs:
        false, hideRegistry: false, */}
        {cardData?.order?.map((elm, i) => {
          if (elm === 1 && !cardData?.hidebanner) {
            return (
              <div
                style={{
                  // marginTop: checkIfOnTop(1, cardData?.order) ? "40px" : "0px",
                  width: "100%",
                }}
              >
                <Banner cardData={cardData} />
              </div>
            );
          } else if (elm === 2 && !cardData?.hideDetails) {
            return (
              <Element
                name="detail"
                className="sm:w-[90%]  w-[95%] mb-9 "
                // style={{
                //   marginTop: checkIfOnTop(2, cardData?.order) ? "40px" : "0px",
                // }}
              >
                <VenueMap cardData={cardData} />
              </Element>
            );
          } else if (elm === 3 && !cardData?.hideVenue) {
            return (
              <Element
                name="venue"
                className="sm:w-[100%]  w-[95%] mb-9 flex justify-center"
                // style={{
                //   marginTop: checkIfOnTop(3, cardData?.order) ? "40px" : "0px",
                // }}
              >
                <Venue cardData={cardData} />
              </Element>
            );
          } else if (elm === 4 && !cardData?.hideBridalParty) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <div
                className=" sm:w-[100%] w-[100%] object-cover flex justify-center items-center overflow-y-scroll"
                style={{
                  backgroundImage: `url(${cardData?.bridalBgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: cardData?.bridalBgImg ? "100vh" : null,
                  // marginTop: checkIfOnTop(4, cardData?.order) ? "40px" : "0px",
                }}
              >
                <Element name="bridal" className="sm:w-[90%]  w-[95%] ">
                  <BridalParty cardData={cardData} />
                </Element>
              </div>
            );
          } else if (
            elm === 5 &&
            cardData?.accomodation?.length > 0 &&
            !cardData?.hideAccomodation
          ) {
            return (
              // <div
              //   className="w-[100%] flex justify-center sm:mt-[75px] mt-11 "
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <div
                className={` w-[100%] object-cover flex justify-center items-center${
                  !cardData?.accomodationBackground && "sm:mt-[65px] mt-11"
                }`}
                style={{
                  backgroundImage: `url(${cardData?.accomodationBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: cardData?.accomodationBackground ? "100vh" : "450px",
                }}
              >
                <Element
                  name="accomodation"
                  className={` sm:w-[40%]  w-[95%]  ${
                    cardData?.accomodationBackground
                      ? "h-[40%] sm:h-[60%]"
                      : "h-[80%] sm:h-[80%]"
                  }`}
                >
                  <Accommodation cardData={cardData} />
                </Element>
              </div>
              // </div>
            );
          } else if (
            elm === 6 &&
            cardData?.placesWeLove?.length > 0 &&
            !cardData?.hidePlaces
          ) {
            return (
              // <div
              //   className="w-[100%] flex justify-center sm:mt-[75px] mt-11 "
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <div
                className={`h-[100vh] w-[100%] object-cover flex justify-center items-center ${
                  !cardData?.placesBackground && "sm:mt-[65px] mt-11"
                }`}
                style={{
                  backgroundImage: `url(${cardData?.placesBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: cardData?.placesBackground ? "100vh" : "450px",
                }}
              >
                <Element
                  name="places"
                  className={` sm:w-[40%]  w-[95%]  ${
                    cardData?.placesBackground
                      ? "h-[40%] sm:h-[60%]"
                      : "h-[80%]"
                  }`}
                >
                  <Trnsportation cardData={cardData} />
                </Element>
              </div>
              // </div>
            );
          } else if (elm === 7 && !cardData?.hideRsvp) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <div
                className="w-[100%] object-cover flex justify-center items-center"
                style={{
                  backgroundImage: `url(${cardData?.rsvpBgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: cardData?.rsvpBgImage ? "100vh" : null,
                }}
              >
                <Element name="rsvp" className="sm:w-[90%]  w-[95%] ">
                  <Rsvp cardData={cardData} />
                </Element>
              </div>
            );
          } else if (elm === 8 && !cardData?.hidefaqs) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <div
                className={` sm:w-[100%] w-[100%] object-cover flex justify-center ${
                  cardData?.faqs?.length > 0 && "overflow-y-scroll"
                }`}
                style={{
                  backgroundImage: `url(${cardData?.faqImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: cardData?.faqImage ? "100vh" : null,
                }}
              >
                <Element name="faq" className="sm:w-[90%]  w-[95%] ">
                  <Faq cardData={cardData} />
                </Element>
              </div>
            );
          } else if (elm === 9 && !cardData?.hideItinerary) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <div
                className=" sm:w-[100%] w-[100%] object-cover flex justify-center  overflow-y-scroll"
                style={{
                  backgroundImage: `url(${cardData?.itineraryBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: cardData?.itineraryBg ? "100vh" : null,
                }}
              >
                <Element name="itinerary" className="sm:w-[90%]  w-[95%]">
                  <Itinerary cardData={cardData} />
                </Element>
              </div>
            );
          } else if (elm === 10 && !cardData?.hideConactUs) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <div
                className={` sm:w-[100%] w-[100%] object-cover flex justify-center ${
                  cardData?.contacts?.length > 0 && "overflow-y-scroll"
                }`}
                style={{
                  backgroundImage: `url(${cardData?.contactBgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: cardData?.itineraryBg ? "100vh" : null,
                }}
              >
                <Element name="contact" className="sm:w-[90%]  w-[95%]">
                  <ContactUs cardData={cardData} />
                </Element>
              </div>
            );
          } else if (elm === 11 && !cardData?.hideRegistry) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >

              <div
                className=" sm:w-[100%] w-[100%] object-cover flex justify-center  overflow-y-scroll "
                style={{
                  backgroundImage: `url(${cardData?.registryBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: cardData?.itineraryBg ? "100vh" : null,
                }}
              >
                <Element name="registry" className="sm:w-[90%]  w-[95%]">
                  <Registry cardData={cardData} />
                </Element>
              </div>
            );
          }
        })}
        {/* ----------------------------bridal party------------------------- */}
        {/* ----------------------------accomodation------------------------- */}
        {/* ----------------------------places we love ------------------------- */}
        {/* ----------------------------rsvp------------------------- */}
        {/* ----------------------------faq ------------------------- */}
        {/* ----------------------------Itinerary ------------------------- */}
        {/* ----------------------------contact us ------------------------- */}
        {/* ----------------------------gift registery ------------------------- */}
      </div>
    </div>
  );
};

export default Card;
