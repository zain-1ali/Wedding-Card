import React from "react";
import venue from "../Imgs/venue.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import map from "../Imgs/map.png";

const Venue = () => {
  return (
    <div className="w-full sm:h-[400px] h-[170px]  flex sm:mt-[60px] mt-5 justify-between">
      <div className="h-full w-[25%]">
        <img
          src={venue}
          className="h-full w-full object-cover rounded-2xl"
          alt="venue"
        />
      </div>
      <div className="h-full sm:w-[65%] w-[70%]">
        <p
          className="font-[400] sm:text-[60px] text-xl sm:mt-[15px]"
          style={{ fontFamily: "Parisienne" }}
        >
          Venue
        </p>
        <p
          className="sm:text-[24px] text-[8px] font-[400] sm:mt-8"
          style={{ fontFamily: "Inter" }}
        >
          Please join us for some drinks and bar hopping afterwards.
        </p>
        <div className="w-full flex justify-between sm:mt-[54px] mt-3">
          <div className="w-[55%] ">
            <h2
              className="font-[600] sm:text-[30px] text-[12px]"
              style={{ fontFamily: "Inter" }}
            >
              When:
            </h2>
            <p
              className="font-[400] sm:text-[20px] sm:mt-2 text-[9px]"
              style={{ fontFamily: "Inter" }}
            >
              THURSDAY 10TH JULY, 2025 AT 6PM
            </p>

            <h2
              className="font-[600] sm:text-[30px] sm:mt-[60px] mt-3 text-[12px]"
              style={{ fontFamily: "Inter" }}
            >
              Location:
            </h2>
            <p
              className="font-[400] sm:text-[20px] sm:mt-2 text-[9px]"
              style={{ fontFamily: "Inter" }}
            >
              123 Anywhere St, Any City
            </p>
          </div>
          <div className="sm:w-[35%] w-[40%] sm:h-[200px]">
            <img src={map} alt="" />
            {/* <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              style={{ height: "250px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup.<br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
