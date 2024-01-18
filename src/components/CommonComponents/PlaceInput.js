import * as React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { showMessage } from "../../store/shared_stateSlice";
import { useDispatch } from "react-redux";
import { geocodeByAddress } from "react-places-autocomplete";
import { UI_API } from "../../services/constant";
// import { CircularProgress } from "@mui/material";

const PlaceInput = ({ address, setUserSinglePlace }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (value !== "" && value !== null) {
      fetchPosition();
    }
  }, [value]);

  React.useEffect(() => {
    setValue(address);
  }, [address]);

  const fetchPosition = async () => {
    if (value?.label) {
      try {
        let googlemapsData = await geocodeByAddress(value.label);
        let singleAddressData = UI_API._returnSingleAddress(googlemapsData);
        setUserSinglePlace(singleAddressData);
      } catch (error) {
        console.log("PlaceInput-30 Error - ", error);
      }
    }
  };

  return (
    <>
      <GooglePlacesAutocomplete
        key={"Places " + Math.random()}
        className="border-[6px] relative truncate hover:text-clip border-[#808080] mt-2 h-[47px] w-full px-1 md:px-2"
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        // autocompletionRequest={{
        //   componentRestrictions: {
        //     country: ["ng"], //to set the specific country
        //   },
        // }}
        selectProps={{
          isClearable: true,
          defaultInputValue: address ? address : "",
          backspaceRemovesValue: true,
          placeholder: "Search...",
          value,
          onChange: setValue,
        }}
        onLoadFailed={(err) => {
          console.log("googlePlaceAutoComplete-54 Error - " + err);
          dispatch(showMessage("Failed to load maps " + err));
        }}
      />
    </>
  );
};

export default PlaceInput;
