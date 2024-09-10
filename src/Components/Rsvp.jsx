import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Rsvp = ({ cardData }) => {
  let baseUrl = import.meta.env.VITE_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [rsvpForm, setRsvpForm] = useState({
    fName: "",
    lastName: "",
    mail: "",
    phone: "",
    fName2: "",
    lastName2: "",
    mail2: "",
    phone2: "",
    AttendingStatus: "",
    numberOfGuests: "",
    numberOfChilds: "",
  });
  const handleCreate = async (e) => {
    e.preventDefault();
    if (rsvpForm?.phone?.length < 6 || rsvpForm?.phone2?.length < 6) {
      toast.error("please enter a valid phone number");
      return;
    }
    setLoading(true);
    axios
      .post(`${baseUrl}/card/submitRsvp`, {
        ...rsvpForm,
        userId: cardData?.userId,
      })
      .then((res) => {
        setLoading(false);
        console.log(res.data.msg);
        toast.success(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  return (
    <div className="w-full  flex flex-col items-center">
      <style>
        {`
        input[type="radio"] {
  appearance: none; /* For modern browsers */
  -webkit-appearance: none; /* For Safari and older browsers */
  -moz-appearance: none; /* For Firefox */
  background-color: transparent;
  border: 1px solid ${cardData?.textColor}; /* Add a custom border */
  width: 20px;
  height: 20px;
  border-radius: 50%; /* Make it circular */
  cursor: pointer;
  position: relative;
}

/* Style the checked state */
input[type="radio"]:checked {
  background-color: transparent;
  border-color: ${cardData?.textColor}; /* Change border color when selected */
}

/* Custom dot inside the radio button when selected */
input[type="radio"]:checked::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${cardData?.textColor}; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
        `}
      </style>
      <Toaster />
      <h2
        className="font-[400] sm:text-[60px] text-3xl sm:mt-[15px]"
        // style={{ fontFamily: "Parisienne" }}
      >
        Rsvp
      </h2>
      <form onSubmit={handleCreate} className="w-[100%]">
        <div
          className={`${
            rsvpForm?.numberOfGuests === 2 && "h-[70vh]"
          }  overflow-y-scroll w-[100%]`}
        >
          <div className="w-[100%] flex justify-between sm:mt-6 mt-3">
            <div className="sm:w-[49%] w-[48%]">
              <p
                className="font-[400] sm:text-[18px] text-[14px]"
                // style={{ fontFamily: "Inter" }}
              >
                First Name
              </p>
              <input
                type="text"
                className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border  mt-1 bg-transparent"
                style={{ border: `1px solid ${cardData?.textColor}` }}
                onChange={(e) =>
                  setRsvpForm({ ...rsvpForm, fName: e.target.value })
                }
                value={rsvpForm?.fName}
              />
            </div>
            <div className="sm:w-[49%] w-[48%]">
              <p
                className="font-[400] sm:text-[18px] text-[14px]"
                // style={{ fontFamily: "Inter" }}
              >
                Last Name
              </p>
              <input
                type="text"
                className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border  mt-1 bg-transparent"
                style={{ border: `1px solid ${cardData?.textColor}` }}
                onChange={(e) =>
                  setRsvpForm({ ...rsvpForm, lastName: e.target.value })
                }
                value={rsvpForm?.lastName}
              />
            </div>
          </div>

          <div className="w-[100%] flex justify-between sm:mt-6 mt-3 ">
            <div className="sm:w-[49%] w-[48%]">
              <p
                className="font-[400] sm:text-[18px] text-[14px]"
                // style={{ fontFamily: "Inter" }}
              >
                Email
              </p>
              <input
                type="email"
                className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border  mt-1 bg-transparent"
                style={{ border: `1px solid ${cardData?.textColor}` }}
                onChange={(e) =>
                  setRsvpForm({ ...rsvpForm, mail: e.target.value })
                }
                value={rsvpForm?.mail}
              />
            </div>
            <div className="sm:w-[49%] w-[48%]">
              <p
                className="font-[400] sm:text-[18px] text-[14px]"
                // style={{ fontFamily: "Inter" }}
              >
                Phone Number
              </p>
              <input
                type="number"
                required
                className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border  mt-1 bg-transparent"
                style={{ border: `1px solid ${cardData?.textColor}` }}
                onChange={(e) =>
                  setRsvpForm({ ...rsvpForm, phone: e.target.value })
                }
                value={rsvpForm?.phone}
              />
            </div>
          </div>
          {rsvpForm?.numberOfGuests === 2 && (
            <>
              <div className="w-[100%] flex justify-between sm:mt-6 mt-3">
                <div className="sm:w-[49%] w-[48%]">
                  <p
                    className="font-[400] sm:text-[18px] text-[14px]"
                    // style={{ fontFamily: "Inter" }}
                  >
                    Second Person First Name
                  </p>
                  <input
                    type="text"
                    className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border  mt-1 bg-transparent"
                    style={{ border: `1px solid ${cardData?.textColor}` }}
                    onChange={(e) =>
                      setRsvpForm({ ...rsvpForm, fName2: e.target.value })
                    }
                    value={rsvpForm?.fName2}
                  />
                </div>
                <div className="sm:w-[49%] w-[48%]">
                  <p
                    className="font-[400] sm:text-[18px] text-[14px]"
                    // style={{ fontFamily: "Inter" }}
                  >
                    Second Person Last Name
                  </p>
                  <input
                    type="text"
                    className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border  mt-1 bg-transparent"
                    style={{ border: `1px solid ${cardData?.textColor}` }}
                    onChange={(e) =>
                      setRsvpForm({ ...rsvpForm, lastName2: e.target.value })
                    }
                    value={rsvpForm?.lastName2}
                  />
                </div>
              </div>

              <div className="w-[100%] flex justify-between sm:mt-6 mt-3 ">
                <div className="sm:w-[49%] w-[48%]">
                  <p
                    className="font-[400] sm:text-[18px] text-[14px]"
                    // style={{ fontFamily: "Inter" }}
                  >
                    Second Person Email
                  </p>
                  <input
                    type="email"
                    className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border  mt-1 bg-transparent"
                    style={{ border: `1px solid ${cardData?.textColor}` }}
                    onChange={(e) =>
                      setRsvpForm({ ...rsvpForm, mail2: e.target.value })
                    }
                    value={rsvpForm?.mail2}
                  />
                </div>
                <div className="sm:w-[49%] w-[48%]">
                  <p
                    className="font-[400] sm:text-[18px] text-[14px]"
                    // style={{ fontFamily: "Inter" }}
                  >
                    Second Person Phone
                  </p>
                  <input
                    type="number"
                    className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2 border  mt-1 bg-transparent"
                    style={{ border: `1px solid ${cardData?.textColor}` }}
                    onChange={(e) =>
                      setRsvpForm({ ...rsvpForm, phone2: e.target.value })
                    }
                    value={rsvpForm?.phone2}
                  />
                </div>
              </div>
            </>
          )}

          <div className="w-[100%] flex justify-between sm:mt-6 mt-3">
            <div className="sm:w-[49%] w-[49%]">
              <p
                className="font-[400] sm:text-[18px] text-[14px]"
                // style={{ fontFamily: "Inter" }}
              >
                Number of guests
              </p>
              <div className=" w-[100%] flex justify-between mt-1">
                <div
                  className="sm:w-[48%] w-[48%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border  flex items-center"
                  style={{ border: `1px solid ${cardData?.textColor}` }}
                >
                  <input
                    type="radio"
                    onClick={() =>
                      setRsvpForm({ ...rsvpForm, numberOfGuests: 1 })
                    }
                    checked={rsvpForm?.numberOfGuests === 1}
                    className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px] accent-black bg-transparent"
                  />
                  <p
                    className="sm:text-[18px] text-[16px] sm:ml-2 ml-2"
                    // style={{ fontFamily: "Inter" }}
                  >
                    One
                  </p>
                </div>

                <div
                  className="sm:w-[48%] w-[48%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border flex items-center"
                  style={{ border: `1px solid ${cardData?.textColor}` }}
                >
                  <input
                    type="radio"
                    onClick={() =>
                      setRsvpForm({ ...rsvpForm, numberOfGuests: 2 })
                    }
                    checked={rsvpForm?.numberOfGuests === 2}
                    className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px] accent-black bg-transparent"
                  />
                  <p
                    className="sm:text-[18px] text-[16px] sm:ml-2 ml-2"
                    // style={{ fontFamily: "Inter" }}
                  >
                    Two
                  </p>
                </div>

                {/* <div className="sm:w-[20%] w-[22%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[16px] sm:ml-2 ml-1"
                // style={{ fontFamily: "Inter" }}
              >
                Three
              </p>
            </div>

            <div className="sm:w-[20%] w-[22%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[16px] sm:ml-2 ml-2"
                // style={{ fontFamily: "Inter" }}
              >
                Four
              </p>
            </div> */}
              </div>
            </div>

            <div className="sm:w-[49%] w-[49%]">
              <p
                className="font-[400] sm:text-[18px] text-[14px]"
                // style={{ fontFamily: "Inter" }}
              >
                Number of children
              </p>
              <div className=" w-[100%] flex justify-between mt-1">
                <div
                  className="sm:w-[100%] w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none  border  flex items-center"
                  style={{ border: `1px solid ${cardData?.textColor}` }}
                >
                  <input
                    type="number"
                    onClick={(e) =>
                      setRsvpForm({
                        ...rsvpForm,
                        numberOfChilds: e.target.value,
                      })
                    }
                    className="w-[100%] sm:h-[45px] h-[40px] rounded-lg outline-none pl-2   mt-1 bg-transparent"
                  />
                </div>
                {/* <div className="sm:w-[20%] w-[22%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[16px] sm:ml-2 ml-1"
                // style={{ fontFamily: "Inter" }}
              >
                Three
              </p>
            </div>

            <div className="sm:w-[20%] w-[22%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 border border-[#696969] flex items-center">
              <input
                type="radio"
                value="60"
                className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px]"
              />
              <p
                className="sm:text-[18px] text-[16px] sm:ml-2 ml-2"
                // style={{ fontFamily: "Inter" }}
              >
                Four
              </p>
            </div> */}
              </div>
            </div>
          </div>

          <div className="w-[100%] flex justify-between sm:mt-6 mt-3">
            <div className="w-[100%] ">
              <p
                className="font-[400] sm:text-[18px] text-[14px]"
                // style={{ fontFamily: "Inter" }}
              >
                Attendance
              </p>
              <div className="w-[100%] flex justify-between mt-1">
                <div
                  className="sm:w-[49%] w-[48%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2   flex items-center"
                  style={{ border: `1px solid ${cardData?.textColor}` }}
                >
                  <input
                    type="radio"
                    onClick={() =>
                      setRsvpForm({ ...rsvpForm, AttendingStatus: "Attending" })
                    }
                    checked={rsvpForm?.AttendingStatus === "Attending"}
                    className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px] accent-black bg-transparent"
                  />
                  <p
                    className="sm:text-[18px] text-[10px] sm:ml-2 ml-2"
                    // style={{ fontFamily: "Inter" }}
                  >
                    YES! I WOULDN'T MISS IT!
                  </p>
                </div>

                <div
                  className="sm:w-[49%] w-[48%] sm:h-[45px] h-[40px] rounded-lg outline-none sm:pl-4 pl-2 flex items-center bg-transparent"
                  style={{ border: `1px solid ${cardData?.textColor}` }}
                >
                  <input
                    type="radio"
                    onClick={() =>
                      setRsvpForm({
                        ...rsvpForm,
                        AttendingStatus: "NotAttending",
                      })
                    }
                    checked={rsvpForm?.AttendingStatus === "NotAttending"}
                    className="sm:h-[22px] sm:w-[22px] h-[19px] w-[19px] accent-black bg-transparent"
                  />
                  <p
                    className="sm:text-[18px] text-[10px] sm:ml-2 ml-2"
                    // style={{ fontFamily: "Inter" }}
                  >
                    NO, SORRY TO MISS IT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] flex justify-end sm:mt-6 mt-3">
          <button
            className="sm:h-[45px] h-[40px] sm:w-[20%] outline-none border-none w-[25%] rounded-lg bg-black text-white flex justify-center items-center cursor-pointer"
            // style={{ fontFamily: "Inter" }}
            type="submit"
            // onClick={() => handleCreate()}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rsvp;
