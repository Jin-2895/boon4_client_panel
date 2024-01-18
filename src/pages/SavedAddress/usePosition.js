import { useState, useEffect } from "react";
import { UI_API } from "../../services/constant";
// import { useDispatch } from "react-redux";
// import { showMessage } from "../../store/shared_stateSlice";
import Geocode from "react-geocode";
import { useLocation, useParams } from "react-router-dom";

export const usePosition = () => {
  // const dispatch = useDispatch();
  const pathname = useLocation();
  const [position, setPosition] = useState(null);
  const [googleMapCoordsError, setGoogleMapCoordsError] = useState(null);
  const [populatedData, setPopulatedData] = useState(null);
  const [location, setLocation] = useState(null);

  const fetchPosition = async () => {
    if (pathname.pathname === "/save-place/add/null") {
      try {
        let googlemapsData = await Geocode.fromLatLng(
          position.lat,
          position.lng
        );
        let singleAddressData = UI_API._returnAddress(googlemapsData);
        let _position = singleAddressData.geoCode;
        setPopulatedData(singleAddressData);
        setLocation({ lat: _position.lat, lng: _position.lng });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 37000,
  };
  useEffect(() => {
    if (position !== null) {
      fetchPosition();
    }
  }, [position]);

  const success = ({ coords }) => {
    setPosition({
      lat: coords.latitude,
      lng: coords.longitude,
    });
  };
  const error = (googleMapCoordsError) => {
    setGoogleMapCoordsError(googleMapCoordsError.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setGoogleMapCoordsError("Geolocation is not supported");
      return;
    }

    let watcher = geo.getCurrentPosition(success, error, options);
    return () => geo.clearWatch(watcher);
  }, []);

  let tempData = {
    populatedData: populatedData,
  };
  let tempUserPosition = {
    position: position,
  };
  let tempLocation = {
    location: location,
  };
  if (tempData && tempUserPosition && tempLocation) {
    return {
      ...tempUserPosition,
      ...tempData,
      ...tempLocation,
      googleMapCoordsError,
    };
  }
};
