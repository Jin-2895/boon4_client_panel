// import React from "react";
// import GoogleMapReact from "google-map-react";
// import { ReactComponent as CustomMapMarker } from "../../assets/svg/googleMapMarker.svg";

// const CustomMarker = ({ text }) => (
//   <div
//     style={{
//       color: "white",
//       background: "grey",
//       padding: "15px 10px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "100%",
//       transform: "translate(-50%, -50%)",
//     }}
//   >
//     <CustomMapMarker />
//     {text}
//   </div>
// );

// const GoogleMapComponent = () => {
//   const options = {
//     center: { lat: 59.95, lng: 30.33 },
//     zoom: 11,
//   };
//   return (
//     <GoogleMapReact
//       bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
//       defaultCenter={options.center}
//       defaultZoom={options.zoom}
//     >
//       <CustomMapMarker
//         lat={59.955413}
//         lng={30.337844}
//         text={"Kreyser Avrora"}
//       />
//     </GoogleMapReact>
//   );
// };

// export default GoogleMapComponent;

import React from "react";
import CustomMapMarker from "../../assets/svg/googleMapMarker.svg";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { CircularProgress } from "@mui/material";
import { geocodeByLatLng } from "react-google-places-autocomplete";
import { UI_API } from "../../services/constant";

const libraries = ["places"];

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function GoogleMapComponent({ position, setMoveMarkerData }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDtXRKiXESsyfQt3acJ8pWsc4Ypef5gNtE",
    libraries,
  });

  const onMapClick = React.useCallback(async (e) => {
    let latitude = e.latLng.lat();
    let longitude = e.latLng.lng();
    const geoCodes = { lat: latitude, lng: longitude };
    // try {
    let _googleData = await geocodeByLatLng(geoCodes);
    let getMapClickAddress = UI_API._returnMoveMarkerAddress(_googleData);
    console.log(getMapClickAddress);
    //   setMoveMarkerData(getMapClickAddress);
    // } catch (error) {
    //   console.log("GoogleMapComponent-87 Error - ", error);
    // }
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  // const panTo = React.useCallback(({ lat, lng }) => {
  //   mapRef.current.panTo({ lat, lng });
  //   mapRef.current.setZoom(14);
  // }, []);

  if (loadError) return "Error";
  if (!isLoaded)
    return (
      <div className="flex justify-center items-center">
        <CircularProgress />
      </div>
    );

  const onDragEndStop = async (e) => {
    let moveMarkerLat = e.latLng.lat();
    let moveMarkerLng = e.latLng.lng();
    try {
      let _googleData = await geocodeByLatLng({
        lat: moveMarkerLat,
        lng: moveMarkerLng,
      });
      let moveMarkerAddress = UI_API._returnMoveMarkerAddress(_googleData);
      setMoveMarkerData(moveMarkerAddress);
    } catch (error) {
      console.log("GoogleMapComponent-116 Error - ", error);
    }
  };

  return (
    <>
      <GoogleMap
        id="map"
        // onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
        // yesIWantToUseGoogleMapApiInternals
        mapContainerStyle={{
          zIndex: 1,
          position: "static",
          width: "100%",
          height: "100%",
        }}
        zoom={[position].length > 0 ? 16 : 12}
        center={position}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
        enableRetinaIcons={true}
      >
        <Marker
          icon={{
            url: CustomMapMarker,
          }}
          position={position}
          // onClick={() => {
          //   setSelected(markers);
          // }}
          draggable={true}
          onDragEnd={(e) => onDragEndStop(e)}
        />
        {/* <InfoWindow
          position={position}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>
            <h2>
              <span role="img" aria-label="bear">
                🐻
              </span>
              Alert
            </h2>
            <p>Spotted {formatRelative(markers.time, new Date())}</p>
          </div>
        </InfoWindow> */}
      </GoogleMap>
    </>
  );
}

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.svg" alt="compass" />
//     </button>
//   );
// }

// const handleInput = (e) => {
//   setValue(e.target.value);
// };

// const handleSelect = async (address) => {
//   setValue(address, false);
//   clearSuggestions();

//   try {
//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     panTo({ lat, lng });
//   } catch (error) {
//     console.log("😱 Error: ", error);
//   }
// };
