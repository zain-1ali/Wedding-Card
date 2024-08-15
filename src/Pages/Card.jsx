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

const Card = () => {
  const { id } = useParams();
  console.log(id);

  const [cardData, setCardData] = useState({});

  let baseUrl = import.meta.env.VITE_BASE_URL;
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

  return (
    <div className="w-[100%] min-h-screen  flex items-center flex-col">
      <div className="w-[100%] " style={{ backgroundColor: cardData?.bgColor }}>
        <Header cardData={cardData} />
      </div>

      <div
        className="h-[100%] sm:w-[100%] w-[100%]  flex flex-col items-center"
        style={{ backgroundColor: cardData?.bgColor }}
      >
        {cardData?.order?.map((elm) => {
          if (elm === 1) {
            return <Banner cardData={cardData} />;
          } else if (elm === 2) {
            return (
              // <div
              //   className="w-[100%] flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <Element name="venue" className="sm:w-[90%]  w-[95%]  ">
                <Venue cardData={cardData} />
              </Element>
              // {/* </div> */}
            );
          } else if (elm === 3) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <Element name="bridal" className="sm:w-[90%]  w-[95%] ">
                <BridalParty cardData={cardData} />
              </Element>
              // </div>
            );
          } else if (elm === 4) {
            return (
              // <div
              //   className="w-[100%] flex justify-center sm:mt-[75px] mt-11 "
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <div
                className="h-[100vh] sm:w-[100%] w-[95%]  border object-cover flex justify-center items-center"
                style={{
                  backgroundImage: `url(${cardData?.accomodationBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Accommodation cardData={cardData} />
              </div>
              // </div>
            );
          } else if (elm === 5) {
            return (
              // <div
              //   className="w-[100%] flex justify-center sm:mt-[75px] mt-11 "
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <div
                className="h-[100vh] sm:w-[100%] w-[95%]  border object-cover flex justify-center items-center"
                style={{
                  backgroundImage: `url(${cardData?.placesBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Trnsportation cardData={cardData} />
              </div>
              // </div>
            );
          } else if (elm === 6) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <Element name="rsvp" className="sm:w-[90%]  w-[95%] ">
                <Rsvp cardData={cardData} />
              </Element>
              // </div>
            );
          } else if (elm === 7) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <Element name="faq" className="sm:w-[90%]  w-[95%] ">
                <Faq cardData={cardData} />
              </Element>
              // </div>
            );
          } else if (elm === 8) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <Element name="itinerary" className="sm:w-[90%]  w-[95%]">
                {/* <Itinerary cardData={cardData} /> */}
                <p>test</p>
              </Element>
              // </div>
            );
          } else if (elm === 9) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <Element name="contact" className="sm:w-[90%]  w-[95%]">
                <ContactUs cardData={cardData} />
              </Element>
              // </div>
            );
          } else if (elm === 10) {
            return (
              // <div
              //   className="w-[100%]  flex justify-center"
              //   style={{ backgroundColor: cardData?.bgColor }}
              // >
              <Element name="gift" className="sm:w-[90%]  w-[95%]  ">
                <Registry />
              </Element>
              // </div>
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

        <br />
        <br />
      </div>
    </div>
  );
};

export default Card;
