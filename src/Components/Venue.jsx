import React from "react";
import venue from "../Imgs/venue.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import map from "../Imgs/map.png";
import ImageSwipper from "./ImageSwipper";

const Venue = ({ cardData }) => {
  const images = [
    "https://media.istockphoto.com/id/1399000045/photo/wedding-guests-clapping-hands-as-the-newlywed-couple-walk-down-the-aisle-joyful-bride-and.jpg?s=612x612&w=0&k=20&c=KQLABtP9v0zSmT_pqIqhdRlG-nWIEOUoGFofIxgjlqI=",
    "https://images.unsplash.com/photo-1524479967500-c3a0bf56d080?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMHZlbnVlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1571268373914-e888c6dafeff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmclMjB2ZW51ZXxlbnwwfHwwfHx8MA%3D%3D",
  ];
  return (
    <div
      className="w-full sm:w-[85%] sm:mt-[65px] mt-11 flex sm:flex-row flex-col  items-center justify-between"
      style={{ backgroundColor: cardData?.bgColor }}
    >
      <div
        className={`sm:w-[50%] w-[100%] sm:p-0 p-3  flex ${
          (cardData?.venueName ||
            cardData?.venueDescription ||
            cardData?.Location) &&
          "sm:h-[350px]"
        } sm:justify-start justify-center items-center`}
      >
        <div className="w-[90%] h-[100%] flex flex-col sm:items-start items-center overflow-y-scroll">
          <h2
            className="sm:text-[30px] text-[28px]  font-[400] text-center"
            style={{ color: cardData?.textColor }}
          >
            The Venue
          </h2>
          <h2
            className="sm:text-[35px] text-[30px] font-[400]  sm:mt-3  "
            style={{}}
          >
            {cardData?.venueName}
            {/* Gino Winery Estate */}
          </h2>
          <p className="text-[18px] font-[400]  mt-2 " style={{}}>
            {cardData?.venueDescription}
          </p>
          <p className="text-[18px] font-[400] mt-2" style={{}}>
            {cardData?.Location}
          </p>
        </div>
      </div>

      {cardData?.venueImages?.length > 0 && (
        <div className="w-[100%] flex justify-center items-center sm:mt-0 mt-10">
          <ImageSwipper images={cardData?.venueImages} />
        </div>
      )}
    </div>
  );
};

export default Venue;
