import { useState, useEffect } from "react";
import * as React from "react";
import { showMessage } from "../../store/shared_stateSlice";
import { ReactComponent as HomeLabelactive } from "../../assets/svg/homeLabelactive.svg";
import { ReactComponent as WorkLabel } from "../../assets/svg/workLabel.svg";
import { ReactComponent as WorkLabelactive } from "../../assets/svg/workLabelactive.svg";
import { ReactComponent as OtherLabel } from "../../assets/svg/otherLabel.svg";
import { ReactComponent as OtherLabelactive } from "../../assets/svg/otherLabelactive.svg";
import { ReactComponent as HomeLabel } from "../../assets/svg/homeLabel.svg";
import { ReactComponent as SearchLabel } from "../../assets/svg/searchLabel.svg";
import { useDispatch, useSelector } from "react-redux";
import { usePosition } from "./usePosition";
import {
  GetUserAddress,
  SaveUserAddress,
  UpdateUserAddress,
} from "../../store/Reducer/AddressApi";
import { useNavigate, useParams } from "react-router-dom";
import PlaceInput from "../../components/CommonComponents/PlaceInput";
import GoogleMapComponent from "./GoogleMapComponent";
import { CircularProgress } from "@mui/material";

/* Setting the API key for the Geocode library. */

const SavePlace = () => {
  const { id, action } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [type, setType] = useState("Other");
  const [mapInputData, setMapInputData] = useState(null);
  const [userSinglePlace, setUserSinglePlace] = useState(null);
  const [position, setPosition] = useState(null);
  // const [editUserData, setEditUserData] = useState(null);
  const [moveMarkerData, setMoveMarkerData] = useState(null);
  const { getUserAddress } = useSelector((state) => state.userAddressData);

  /* A custom hook that is used to get the current location of the user. */
  const { populatedData, location, googleMapCoordsError } = usePosition();

  useEffect(() => {
    dispatch(GetUserAddress());
  }, []);

  /* Setting the state of mapInputData to the populatedData. */
  useEffect(() => {
    if (action === "add" && !userSinglePlace) {
      setPosition(location);
      if (populatedData) {
        setMapInputData({
          address: populatedData ? populatedData?.address : "",
          locationName: populatedData ? populatedData?.area : "",
          building: populatedData ? populatedData?.street_address : "",
          city: populatedData ? populatedData?.city : "",
          postalCode: populatedData ? populatedData?.postalcode : "",
          lat: populatedData?.geoCode?.lat,
          long: populatedData?.geoCode?.lng,
        });
      }
    }
  }, [populatedData, location]);

  /* Setting the state of mapInputData to the populatedData. */
  useEffect(() => {
    if (action === "add" && moveMarkerData) {
      setPosition(moveMarkerData?.geoCode);
      if (moveMarkerData) {
        setMapInputData({
          address: moveMarkerData ? moveMarkerData?.address : "",
          locationName: moveMarkerData ? moveMarkerData?.area : "",
          building:
            moveMarkerData?.street_address !== "" &&
            moveMarkerData?.street_number !== ""
              ? moveMarkerData?.street_address +
                ", " +
                moveMarkerData?.street_number
              : moveMarkerData?.street_address !== ""
              ? moveMarkerData?.street_address
              : moveMarkerData?.street_number,
          city: moveMarkerData ? moveMarkerData?.city : "",
          postalCode: moveMarkerData ? moveMarkerData?.postalcode : "",
          lat: moveMarkerData.geoCode.lat,
          long: moveMarkerData.geoCode.lng,
        });
      }
    }
  }, [moveMarkerData]);

  /* Setting the state of mapInputData to the populatedData. */
  useEffect(() => {
    if (action === "edit" && moveMarkerData) {
      setPosition(moveMarkerData?.geoCode);
      if (moveMarkerData) {
        setMapInputData({
          address: moveMarkerData ? moveMarkerData?.address : "",
          locationName: moveMarkerData ? moveMarkerData?.area : "",
          building:
            moveMarkerData?.street_address !== "" &&
            moveMarkerData?.street_number !== ""
              ? moveMarkerData?.street_address +
                ", " +
                moveMarkerData?.street_number
              : moveMarkerData?.street_address !== ""
              ? moveMarkerData?.street_address
              : moveMarkerData?.street_number,
          city: moveMarkerData ? moveMarkerData?.city : "",
          postalCode: moveMarkerData ? moveMarkerData?.postalcode : "",
          lat: moveMarkerData.geoCode.lat,
          long: moveMarkerData.geoCode.lng,
        });
      }
    }
  }, [moveMarkerData]);

  /* Setting the state of mapInputData. */
  useEffect(() => {
    if (action === "add" && userSinglePlace) {
      setPosition(userSinglePlace.geoCode);
      if (userSinglePlace) {
        setMapInputData({
          address: userSinglePlace ? userSinglePlace?.address : "",
          locationName: userSinglePlace ? userSinglePlace?.area : "",
          building: userSinglePlace ? userSinglePlace?.street_address : "",
          city: userSinglePlace ? userSinglePlace?.city : "",
          postalCode: userSinglePlace ? userSinglePlace?.postalcode : "",
          lat: userSinglePlace.geoCode.lat,
          long: userSinglePlace.geoCode?.lng,
        });
      }
    }
  }, [userSinglePlace]);

  useEffect(() => {
    // setting data back into the form from edit button callback
    if (action === "edit") {
      if (getUserAddress) {
        let filterData = getUserAddress.filter((item) => {
          return item.id === parseInt(id) ? item : null;
        });
        debugger;
        setType(filterData[0]?.type);
        setPosition({ lat: filterData[0]?.lat, lng: filterData[0]?.lng });
        setMapInputData({
          address: filterData[0] ? filterData[0]?.address : "",
          locationName: filterData[0] ? filterData[0]?.locationName : "",
          building: filterData[0] ? filterData[0]?.building : "",
          city: filterData[0] ? filterData[0]?.city : "",
          postalCode: filterData[0] ? filterData[0]?.postalCode : "",
          lat: filterData[0]?.lat,
          long: filterData[0]?.lng,
        });
      }
    }
  }, [getUserAddress]);

  useEffect(() => {
    if (action === "edit" && userSinglePlace) {
      setPosition(userSinglePlace?.geoCode);
      debugger;
      setMapInputData({
        address: userSinglePlace ? userSinglePlace?.address : "",
        locationName: userSinglePlace ? userSinglePlace?.area : "",
        building:
          userSinglePlace?.street_address !== "" &&
          userSinglePlace?.street_number !== ""
            ? userSinglePlace?.street_address +
              ", " +
              userSinglePlace?.street_number
            : userSinglePlace?.street_address !== ""
            ? userSinglePlace?.street_address
            : userSinglePlace?.street_number,
        city: userSinglePlace ? userSinglePlace?.city : "",
        postalCode: userSinglePlace ? userSinglePlace?.postalcode : "",
        lat: userSinglePlace?.lat,
        long: userSinglePlace?.lng,
      });
    }
  }, [userSinglePlace]);

  /**
   * If type is not defined, show a message. If populatedData.value.terms[0].value is not
   */
  const handleClick = (e) => {
    e.preventDefault();
    if (!type) {
      return dispatch(showMessage("Please select type of address, eg. Home."));
    }
    if (!(mapInputData?.locationName).length) {
      return dispatch(showMessage("Please enter location name."));
    }
    if (!mapInputData?.city) {
      return dispatch(
        showMessage("Select best possible near address to your location")
      );
    }
    if (!mapInputData?.building) {
      return dispatch(showMessage("Please enter Apt, building or suit."));
    }
    if (mapInputData?.postalCode?.length < 5) {
      return dispatch(showMessage("Your postal code is less than 5"));
    }
    if (id === "null") {
      const data = [
        {
          address: mapInputData?.address,
          locationName: mapInputData?.locationName,
          building: mapInputData?.building,
          postalCode: mapInputData?.postalCode,
          city: mapInputData?.city,
          type: type,
          lat: mapInputData?.lat,
          lng: mapInputData?.long,
        },
      ];
      const _data = {
        navigate,
        path: "/saved-address",
        data,
      };

      dispatch(SaveUserAddress(_data));
    } else {
      const data = {
        address: mapInputData?.address,
        locationName: mapInputData?.locationName,
        building: mapInputData?.building,
        postalCode: mapInputData?.postalCode,
        city: mapInputData?.city,
        type: type,
        lat: mapInputData?.lat,
        lng: mapInputData?.long,
      };
      const _data = {
        navigate,
        path: `/saved-address`,
        data,
        id: id,
      };
      dispatch(UpdateUserAddress(_data));
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[100%] m-1 md:m-5 justify-center bg-white shadow-md">
        {googleMapCoordsError === null ? (
          <div className="p-3 md:p-6 lg:p-12 flex flex-col gap-6 md:gap-8 ">
            <div className="flex flex-col gap-2 md:items-start items-center">
              <h1 className="font-[700] text-[24px] leading-[28.8px]">
                Save Place
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 w-full">
              <button
                onClick={() => setType("Home")}
                className={
                  type === "Home"
                    ? "border-[1.5px] border-opacity-20 px-2 md:px-4 py-2 flex flex-row items-center gap-3 font-[400] text-[#CF2D39] rounded-md border-[#CF2D39] hover:cursor-pointer"
                    : "border-[1.5px] border-[#000] border-opacity-20 px-2 md:px-4 py-2 flex flex-row items-center gap-3 font-[400] text-black rounded-md hover:cursor-pointer"
                }
              >
                {type === "Home" ? (
                  // <img src={homeLabelactive} alt="home_label_active" />
                  <HomeLabelactive />
                ) : (
                  <HomeLabel />
                )}
                <p>Home</p>
              </button>
              <button
                onClick={() => setType("Work")}
                className={
                  type === "Work"
                    ? "border-[1.5px] border-opacity-20 px-2 md:px-4 py-2 flex flex-row items-center gap-3 font-[400] text-[#CF2D39] rounded-md border-[#CF2D39] hover:cursor-pointer"
                    : "border-[1.5px] border-[#000] border-opacity-20 px-2 md:px-4 py-2 flex flex-row items-center gap-3 font-[400] text-black rounded-md hover:cursor-pointer"
                }
              >
                {type === "Work" ? <WorkLabelactive /> : <WorkLabel />}
                <p>Work</p>
              </button>
              <button
                onClick={() => setType("Other")}
                className={
                  type === "Other"
                    ? "border-[1.5px] border-opacity-20 px-2 md:px-4 py-2 flex flex-row items-center gap-3 font-[400] text-[#CF2D39] rounded-md border-[#CF2D39] hover:cursor-pointer"
                    : "border-[1.5px] border-[#000] border-opacity-20 px-2 md:px-4 py-2 flex flex-row items-center gap-3 font-[400] text-black rounded-md hover:cursor-pointer"
                }
              >
                {type === "Other" ? <OtherLabelactive /> : <OtherLabel />}
                <p>Other</p>
              </button>
            </div>
            <div className="grid">
              <div className="mb-2">Address</div>
              <div className="relative">
                {mapInputData?.address ? (
                  <>
                    <PlaceInput
                      setUserSinglePlace={setUserSinglePlace}
                      address={mapInputData?.address}
                    />
                    <div className="absolute bg-white rounded-full px-[0.70rem] py-[0.70rem] top-1 right-1">
                      <SearchLabel />
                    </div>
                  </>
                ) : (
                  <div className="flex justify-center border-[0.1rem] py-1 border-black/[50%]">
                    <CircularProgress />
                  </div>
                )}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div>
                  Location name <span className="text-red-600">*</span>
                </div>
                <div>
                  <input
                    value={mapInputData ? mapInputData?.locationName : ""}
                    onChange={(e) =>
                      setMapInputData({
                        ...mapInputData,
                        locationName: e.target.value,
                      })
                    }
                    type="text"
                    className="border-[0.1rem] capitalize border-[#808080] mt-2 h-[47px] w-full px-1 md:px-2"
                  />
                </div>
              </div>
              <div>
                <div>
                  Apt, building, suit <span className="text-red-600">*</span>
                </div>
                <div>
                  <input
                    value={mapInputData ? mapInputData?.building : ""}
                    onChange={(e) =>
                      setMapInputData({
                        ...mapInputData,
                        building: e.target.value,
                      })
                    }
                    type="text"
                    className="border-[0.1rem] capitalize border-[#808080] mt-2 h-[47px] w-full px-1 md:px-2"
                  />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div>City</div>
                <div>
                  <select
                    disabled
                    type="text"
                    className="border-[0.1rem] capitalize border-[#808080] bg-black/10 mt-2 h-[47px] w-full px-1 md:px-2"
                  >
                    <option>
                      {mapInputData ? mapInputData?.city : "Select address"}
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  Postal code <span className="text-red-600">*</span>
                </div>
                <div>
                  <input
                    onChange={(e) =>
                      setMapInputData({
                        ...mapInputData,
                        postalCode: e.target.value,
                      })
                    }
                    value={mapInputData ? mapInputData?.postalCode : ""}
                    type="number"
                    className="border-[0.1rem] border-[#808080] mt-2 h-[47px] w-full px-1 md:px-2"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-[30vh] md:h-[35vh] relative flex justify-center items-center">
              {/* <GoogleMap
              userSinglePlace={userSinglePlace}
              position={position}
              setMoveMarkerData={setMoveMarkerData}
              setMoveMarkerLatLng={setMoveMarkerLatLng}
            /> */}
              <GoogleMapComponent
                position={position}
                setMoveMarkerData={setMoveMarkerData}
              />
            </div>
            <div className="flex justify-center md:justify-end">
              <button
                onClick={(e) => handleClick(e)}
                className="font-[700] text-[16px] leading-[20px] bg-[#CF2D39] text-white px-[5rem] py-3"
              >
                {action === "edit" ? (
                  <>Update this Address</>
                ) : (
                  <>Save this place</>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1>Please allow system & browser Location access to continue.</h1>
            <p>Click refresh when allow location</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavePlace;
