import React from "react";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Venue from "../Components/Venue";
import Rsvp from "../Components/Rsvp";
import Itinerary from "../Components/Itinerary";
import Accommodation from "../Components/Accommodation";
import Trnsportation from "../Components/Transportation";
import ThingsToDo from "../Components/ThingsToDo";

const Card = () => {
  return (
    <div className="w-[100%] h-screen flex justify-center">
      <div className="h-[100%] sm:w-[94%] w-[95%]">
        <Header />
        <Banner />
        <Venue />
        <Rsvp />
        <Itinerary />
        <Accommodation />
        <Trnsportation />
        <ThingsToDo />
      </div>
    </div>
  );
};

export default Card;
