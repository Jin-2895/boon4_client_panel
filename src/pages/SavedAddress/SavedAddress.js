import React from "react";
import {
  homeCity,
  homeIcon,
  homeLabel,
  otherLabel,
  workLabel,
  homePostelCode,
  workIcon,
  otherIcon,
} from "../../assets/svg";
import { useNavigate } from "react-router-dom";
import {
  DeleteUserAddress,
  GetUserAddress,
} from "../../store/Reducer/AddressApi";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const SavedAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getUserAddress, addressLoading, deleteUserAddress } = useSelector(
    (state) => state.userAddressData
  );

  React.useEffect(() => {
    dispatch(GetUserAddress());
  }, []);

  const handleClick = () => {
    navigate("/save-place/add/null");
  };

  React.useEffect(() => {
    if (deleteUserAddress?.success === true) {
      dispatch(GetUserAddress());
    }
  }, [deleteUserAddress]);

  const handleAddressDelete = (address) => {
    let _data = {
      navigate,
      id: address.id,
    };
    dispatch(DeleteUserAddress(_data));
  };

  const handleEdit = (address) => {
    const id = address.id;
    navigate(`/save-place/edit/${id}`);
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white shadow-md w-full">
        <div className="p-3 md:p-6 lg:p-12 flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-2 md:items-start items-center">
            <h1 className="font-[700] text-[24px] leading-[28.8px]">
              Saved address
            </h1>
            <p className="font-[400] text-[16px] text-black/50 leading-[23.2px] text-center md:text-start">
              You can save upto only 5 address which can be used as your pickup
              locations
            </p>
          </div>
          {addressLoading ? (
            <div className="flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <>
              {getUserAddress?.map((address) => {
                return (
                  <div key={Math.random() * address?.id}>
                    <div className="border-[0.1rem] border-black/20 grid md:grid-cols-4 grid-row-3 gap-y-4 md:gap-x-2 bg-white rounded-md">
                      <div className="flex justify-center items-center p-[1.5rem]">
                        <img
                          className="h-[8rem] w-[8rem]"
                          src={
                            address?.type === "Home"
                              ? homeIcon
                              : address?.type === "Work"
                              ? workIcon
                              : otherIcon
                          }
                          alt="address svg"
                        />
                      </div>
                      <div className="py-4 col-span-2 flex flex-col gap-6">
                        <div className="flex flex-col justify-between gap-y-2">
                          <h1 className="font-[700] text-[20px] leading-[24px] capitalize">
                            {address?.locationName}
                          </h1>
                          <p className="font-[400] capitalize text-[14px] leading-[18.9px] text-black/50">
                            {address?.address}
                          </p>
                        </div>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col gap-1">
                            <h1>Label</h1>
                            <div className="flex flex-row gap-2">
                              <img
                                src={
                                  address?.type === "Home"
                                    ? homeLabel
                                    : address?.type === "Work"
                                    ? workLabel
                                    : otherLabel
                                }
                                alt="label home"
                              />
                              <p className="capitalize">{address?.type}</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h1 className="truncate">Postel Code</h1>
                            <div className="flex flex-row gap-2">
                              <img
                                src={homePostelCode}
                                alt="label home postel code"
                              />
                              <p>{address?.postalCode}</p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <h1>City</h1>
                            <div className="flex flex-row gap-2">
                              <img src={homeCity} alt="label home city" />
                              <p className="capitalize">{address?.city}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="py-[1rem] flex justify-end items-start px-6 gap-6">
                        <button
                          onClick={() => handleEdit(address)}
                          className="font-[400] text-[14px] leading-[18.9px] text-[#CF2D39]"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleAddressDelete(address)}
                          className="font-[400] text-[14px] leading-[18.9px] text-[#CF2D39]"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
          {getUserAddress?.length < 5 ? (
            <div className="flex justify-center md:justify-end">
              <button
                onClick={() => handleClick()}
                className="font-[700] text-[20px] leading-[24px] cursor-pointer hover:cursor-pointer text-[#CF2D39]"
              >
                + Add a new address
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SavedAddress;
