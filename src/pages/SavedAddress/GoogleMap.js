import React from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { geocodeByLatLng } from "react-google-places-autocomplete";
import { UI_API } from "../../services/constant";
import { showMessage } from "../../store/shared_stateSlice";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";

// const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export function GoogleMap({
  google,
  position,
  setMoveMarkerData,
  setMoveMarkerLatLng,
}) {
  const dispatch = useDispatch();
  const onMarkerDragEnd = async (e) => {
    try {
      let _position = e.position;
      let _googleData = await geocodeByLatLng(_position);
      setMoveMarkerLatLng(_position);
      let moveMarkerAddress = UI_API._returnMoveMarkerAddress(_googleData);
      setMoveMarkerData(moveMarkerAddress);
    } catch (error) {
      dispatch(showMessage(error));
    }
  };
  return (
    <Map
      google={google}
      containerStyle={{
        zIndex: 1,
        position: "static",
        width: "100%",
        height: "100%",
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      enableEventPropagation={false}
      mapTypeControl={false}
      streetViewControl={false}
      center={position ? position : { lat: 33.123456, lng: 77.123455 }}
      centerAroundCurrentLocation={true}
      onInitialCenter={position ? position : { lat: 33.123456, lng: 77.123455 }}
      zoom={[position].length === 1 ? 18 : 13}
      disableDefaultUI={false}
    >
      <Marker
        position={position ? position : { lat: 33.123456, lng: 77.123455 }}
        draggable={true}
        onDragend={(e) => onMarkerDragEnd(e)}
      />
    </Map>
  );
}

const LoadingContainer = (props) => (
  <div className="bg-gray-100 w-full h-full flex justify-center items-center">
    <CircularProgress />
  </div>
);

export default React.memo(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    // libraries: ["places"],
    LoadingContainer: LoadingContainer,
  })(GoogleMap)
);
