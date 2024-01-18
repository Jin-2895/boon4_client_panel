import React from "react";
import { useNavigate } from "react-router-dom";
import PlaceInput from "../../components/CommonComponents/PlaceInput";
import { ReactComponent as SearchLabel } from "../../assets/svg/searchLabel.svg";
import SizeBundle from "../../components/CommonComponents/SizeBundle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobType } from "../../store/Reducer/JobTypeApi";
import { CountryConfiguration } from "../../store/Reducer/CountryConfigurationApi";
import JobType from "../../components/CommonComponents/JobType";
import { GetEstimate } from "../../store/Reducer/GetEstimateApi";
import { CircularProgress } from "@mui/material";
import { showMessage } from "../../store/shared_stateSlice";

export const GetEstimator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deliveryType, setDeliveryType] = React.useState(-1);
  const [sizeId, setSizeId] = React.useState();
  const [countryCurrency, setCountryCurrency] = React.useState("");
  const [pickupLocation, setPickupLocation] = React.useState(null);
  const [deliveryLocation, setDeliveryLocation] = React.useState(null);
  const [countryConfigurationId, setCountryConfigurationId] =
    React.useState("");
  const [jobData, setJobData] = React.useState([]);
  const [filterDeliveryType, setfilterDeliveryType] = React.useState([]);

  const { countryConfigurationData } = useSelector(
    (state) => state.countryConfiguration
  );

  const { estimatorLoading } = useSelector((state) => state.estimator);

  const { jobTypeData, jobTypeLoading } = useSelector((state) => state.jobType);

  React.useEffect(() => {
    if (jobTypeData) {
      setJobData(jobTypeData);
    }
  }, [jobTypeData]);

  useEffect(() => {
    let countryName = JSON.parse(localStorage.getItem("userCountry&Time"));
    let _data = countryName;
    dispatch(CountryConfiguration(_data));
  }, []);

  React.useEffect(() => {
    if (countryConfigurationData.length > 0) {
      let countryID = countryConfigurationData[0]?.id;
      setCountryCurrency(countryConfigurationData[0]?.currency);
      setCountryConfigurationId(countryID);
      dispatch(getJobType(countryID));
    }
  }, [countryConfigurationData]);

  useEffect(() => {
    let filterType = jobData?.rows?.filter((item) => {
      return item.name ? item.name === deliveryType : [];
    });
    setfilterDeliveryType(filterType);
  }, [deliveryType]);

  const handleEstimateButton = () => {
    if (pickupLocation === null) {
      return dispatch(showMessage("Please fill in the Pickup location."));
    }
    if (deliveryLocation === null) {
      return dispatch(showMessage("Please fill in the delivery location."));
    }
    if (deliveryType === "") {
      return dispatch(
        showMessage("Please choose kind of items you want to send.")
      );
    }
    if (!sizeId) {
      return dispatch(
        showMessage("Please check the box that best suit your product.")
      );
    }

    if (
      pickupLocation.address &&
      deliveryLocation.address &&
      deliveryType &&
      sizeId
    ) {
      let pickup = {
        lat: pickupLocation.geoCode.lat,
        lng: pickupLocation.geoCode.lng,
      };
      let delivery = {
        lat: deliveryLocation.geoCode.lat,
        lng: deliveryLocation.geoCode.lng,
      };
      const data = {
        from: pickupLocation?.address,
        to: deliveryLocation?.address,
        latLng: {
          from: [pickup.lat, pickup.lng],
          to: [delivery.lat, delivery.lng],
        },
      };
      console.log(data);
      let _data = {
        data,
        navigate,
        curr: countryCurrency,
        countryConfigurationId,
        id: parseInt(sizeId),
      };
      dispatch(GetEstimate(_data));
    } else {
      dispatch(
        showMessage("There was an error with your internet, Please try again.")
      );
    }
  };

  const boxesList =
    deliveryType >= 0
      ? jobData.rows.find((el) => el.id === deliveryType).sizes
      : -1;

  return (
    <>
      <div className="bg-white py-10 px-4 shadow-md">
        <div className="sm:px-4 md:px-6 lg:px-8">
          <div>
            <h1 className=" font-[700] text-[28px] leading-[33.6px]">
              Delivery estimator
            </h1>
          </div>
          <div className="grid grid-row-2 md:grid-cols-2 gap-10 mt-[36px]">
            <div>
              <p className="font-[400] text-[14px] leading-[16.8px] mb-[8px]">
                Pickup location <span className="text-[#CF2D39]">*</span>
              </p>
              <div className="relative">
                <PlaceInput
                  setUserSinglePlace={setPickupLocation}
                  className="w-full"
                />
                <div className="absolute bg-white rounded-full px-[0.70rem] py-[0.70rem] top-1 right-1">
                  <SearchLabel />
                </div>
              </div>
            </div>
            <div>
              <p className="font-[400] text-[14px] leading-[16.8px] mb-[8px]">
                Delivery location <span className="text-[#CF2D39]">*</span>
              </p>
              <div className="relative">
                <PlaceInput
                  setUserSinglePlace={setDeliveryLocation}
                  className="w-full"
                />
                <div className="absolute bg-white rounded-full px-[0.70rem] py-[0.70rem] top-1 right-1">
                  <SearchLabel />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-4 md:px-6 lg:px-8 w-full mt-[36px]">
          <h1 className="font-[700] text-[20px] leading-[24px]">
            What kind of items are you sending?{" "}
            <span className="text-[#CF2D39]">*</span>
          </h1>
          <JobType
            loading={jobTypeLoading}
            type={jobData}
            setDeliveryType={setDeliveryType}
            deliveryType={deliveryType}
          />

          {deliveryType >= 0 && (
            <div className="mt-[20px] md:mt-[35px]">
              <h1 className="text-[20px] font-[600] leading-[27.24px]">
                Tell us more about your delivery
              </h1>
              <SizeBundle
                loading={jobTypeLoading}
                type={filterDeliveryType}
                boxesList={boxesList}
                deliveryType={deliveryType}
                checkBoxValue={sizeId}
                setCheckBoxValue={setSizeId}
              />
            </div>
          )}
          <div className="flex justify-end mt-[25px] mb-[13px] ">
            <button
              onClick={() => handleEstimateButton()}
              className={
                estimatorLoading
                  ? "bg-[#CF2D39]/[20%] flex flex-row justify-center cursor-none items-center gap-8"
                  : "bg-[#CF2D39] flex flex-row justify-center items-center gap-8"
              }
            >
              <h1 className="font-[700] text-[16px] leading-[19.2px] w-[263px] h-[48px] text-white text-center flex justify-center items-center">
                {estimatorLoading ? (
                  <CircularProgress size={"30px"} />
                ) : (
                  "Get an estimate"
                )}
              </h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
