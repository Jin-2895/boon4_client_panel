import { Button, Typography } from "@mui/material";
import * as React from "react";
// import { useState } from "react";
import Radio from "@mui/material/Radio";
// import useHover from "../../CusHooks/UseHover";
import { ReactComponent as Negcircle } from "../../assets/svg/negcircle.svg";
import { ReactComponent as Poscircle } from "../../assets/svg/poscircle.svg";
import upload_icon from "../../assets/images/upload-icon.png";
import cancel from "../../assets/hompage_icons/cancel.png";

export const ItemInfo = () => {
  const [itemName, setItemName] = React.useState(null);
  const [deliverySize, setDeliverySize] = React.useState(null);
  const [packageSize, setPackageSize] = React.useState(null);
  const [itemsQuantity, setItemQuantity] = React.useState(null);
  const [uploads, setUploads] = React.useState([]);
  const [extraField, setExtraField] = React.useState(null);
  const [extraFieldInput, setExtraFieldInput] = React.useState(null);
  const [error, setError] = React.useState(null);

  // job items info handlers ----------------------------------------------------------------------------
  const deliverySizeChangeHandler = (value) => {
    setDeliverySize(value);
  };
  const packageSizeChangeHandler = (value) => {
    setPackageSize(value);
  };
  const itemsQuantityIncreaseHandler = (value) => {
    setItemQuantity((prvQty) => ++prvQty);
  };
  const itemsQuantityDecreaseHandler = (value) => {
    setItemQuantity((prvQty) => --prvQty);
  };
  const extraFieldChangeHandler = (value) => {
    setExtraField(value);
  };

  const uploadChangeHandler = (event) => {
    if (event.target.files) {
      if (uploads.length < 1) {
        let newUpload = URL.createObjectURL(event.target.files[0]);
        setUploads([newUpload]);
      } else {
        setUploads([...uploads, URL.createObjectURL(event.target.files[0])]);
      }
    }
  };
  const removeSelectedImage = (event, indx, id) => {
    event.preventDefault();
    const photos = uploads.filter((item, index) => index !== indx);
    setUploads(photos);
    // if (deletedId.length === 0) {
    //   setDeletedId([`${id}`]);
    // } else {
    //   setDeletedId([...deletedId, `${id}`]);
    // }
  };

  const handleSaveItem = () => {
    if (
      itemName === null ||
      deliverySize === null ||
      packageSize === null ||
      itemsQuantity === null ||
      uploads.length <= 0
    ) {
      setError("Please check it you have completely fill the deatils");
    }
    let _data = {
      itemName: itemName,
      packageSize: deliverySize,
      itemsQuantity: itemsQuantity,
      photoUri: uploads,
      extraField: extraField,
      extraFieldInput: extraFieldInput,
    };
    sessionStorage.setItem("itemInfo", JSON.stringify(_data));
  };
  return (
    <div className="sm:px-4 md:px-6 lg:px-8">
      {/* -------------------------------------------------------------------------------------- */}
      {/* ////////////////////////////////// Item Name /////////////////////////////////////////// */}
      {/* ---------------------------------------------------------------------------------------- */}
      <Typography fontWeight="600">Give your item a name </Typography>
      <div className="flex flex-col sm:w-[20rem] my-4">
        <label htmlFor="item_name" className="mb-2">
          Item name
        </label>
        <input
          type="text"
          name="item_name"
          id="item_name"
          className="p-2 border-0"
          onChange={(e) => setItemName(e.target.value)}
          style={{ border: "1px solid #808080" }}
        />
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      {/* /////////////////////////////// Delivery Size /////////////////////////////////////////// */}
      {/* ----------------------------------------------------------------------------------------- */}
      <Typography fontWeight="600">
        What is the size of your entire delivery? *
      </Typography>

      <div className="flex md:flex-nowrap flex-wrap md:justify-start justify-center">
        <div
          className={`flex flex-col justify-center items-center border-[1px]  border-opacity-20 rounded-md hover:border-[#CF2D39] hover:cursor-pointer ${
            deliverySize === "small"
              ? "border-[#CF2D39] text-[#CF2D39] border-opacity-100"
              : "border-[#000]"
          } hover:text-[#CF2D39]  p-3 my-5 `}
          onClick={() => deliverySizeChangeHandler("small")}
        >
          <div className="flex items-center">
            <div>
              <Typography fontWeight="600">Small</Typography>
              <div className="my-2">
                <p className="opacity-50 text-[12px]">Weight 2kg • </p>
                <p className="opacity-50 text-[12px]">
                  30 cm (L) x 15 cm (W) x 10 cm (H)
                </p>
              </div>
            </div>
            <div>
              <Radio
                checked={deliverySize === "small"}
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center border-[1px]  border-opacity-20 rounded-md hover:border-[#CF2D39] hover:cursor-pointer md:ml-5 ml-0 ${
            deliverySize === "medium"
              ? "border-[#CF2D39] text-[#CF2D39] border-opacity-100"
              : "border-[#000]"
          } hover:text-[#CF2D39]  p-3 my-5 `}
          onClick={() => deliverySizeChangeHandler("medium")}
        >
          <div className="flex items-center">
            <div>
              <Typography fontWeight="600">Medium</Typography>
              <div className="my-2">
                <p className="opacity-50 text-[12px]">Weight 2kg • </p>
                <p className="opacity-50 text-[12px]">
                  30 cm (L) x 15 cm (W) x 10 cm (H)
                </p>
              </div>
            </div>
            <div>
              <Radio
                checked={deliverySize === "medium"}
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col justify-center items-center border-[1px]  border-opacity-20 rounded-md hover:border-[#CF2D39] hover:cursor-pointer md:ml-5 ml-0 ${
            deliverySize === "large"
              ? "border-[#CF2D39] text-[#CF2D39] border-opacity-100"
              : "border-[#000]"
          } hover:text-[#CF2D39] p-3 my-5`}
          onClick={() => deliverySizeChangeHandler("large")}
        >
          <div className="flex items-center">
            <div>
              <Typography fontWeight="600">Large</Typography>
              <div className="my-2">
                <p className="opacity-50 text-[12px]">Weight 2kg • </p>
                <p className="opacity-50 text-[12px]">
                  30 cm (L) x 15 cm (W) x 10 cm (H)
                </p>
              </div>
            </div>
            <div>
              <Radio
                checked={deliverySize === "large"}
                name="radio-buttons"
                inputProps={{ "aria-label": "A" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      {/* /////////////////////////// Custom Delivery Sizes /////////////////////////////////////// */}
      {/* ----------------------------------------------------------------------------------------- */}
      <Typography fontWeight="600" marginTop={2}>
        Or provide us with your own package size
      </Typography>
      <p className="opacity-50">
        Select weight or dimensions or you can select both as well.
      </p>
      <div className="flex md:flex-row flex-col">
        <div className="my-4 flex flex-col sm:w-[20rem] w-full">
          <label htmlFor="cusWeight" className="mb-2">
            Select any extra field
          </label>
          <select
            name="extraField"
            id="extraField"
            style={{ border: "1px solid #808080" }}
            className="bg-[#fff] p-2 py-[9.5px]"
            onChange={(e) => packageSizeChangeHandler(e.target.value)}
          >
            <option value="select" className="">
              Select
            </option>
            <option value="onlyWeight" className="checked">
              Only weight
            </option>
            <option value="onlyDimension" className="">
              Only dimension
            </option>
            <option value="both" className="">
              both
            </option>
          </select>
        </div>
        {(packageSize && packageSize === "onlyWeight") ||
        (packageSize && packageSize === "both") ? (
          <div className="relative my-4 flex flex-col md:w-[20rem] md:ml-8">
            <label htmlFor="cusWeight" className="mb-2">
              Enter Weight
            </label>
            <input
              type="text"
              name="cusWeight"
              id="cusWeight"
              className="p-2"
              style={{ border: "1px solid #808080" }}
            />
            <div className="absolute top-10 right-4">kg</div>
          </div>
        ) : null}
        {packageSize && packageSize === "onlyDimension" ? (
          <div className="relative my-4 flex flex-col md:w-[20rem] md:ml-8">
            <label htmlFor="cusWeight" className="mb-2">
              Enter length
            </label>
            <input
              type="text"
              name="cusWeight"
              id="cusWeight"
              className="p-2"
              style={{ border: "1px solid #808080" }}
            />
            <div className="absolute top-10 right-4">cm</div>
          </div>
        ) : null}
      </div>
      <div className="flex md:flex-row flex-col">
        {(packageSize && packageSize === "onlyDimension") ||
        (packageSize && packageSize === "both") ? (
          <div className="relative my-4 flex flex-col md:w-[20rem] ">
            <label htmlFor="cusWeight" className="mb-2">
              Enter width
            </label>
            <input
              type="text"
              name="cusWeight"
              id="cusWeight"
              className="p-2"
              style={{ border: "1px solid #808080" }}
            />
            <div className="absolute top-10 right-4">cm</div>
          </div>
        ) : null}
        {(packageSize && packageSize === "onlyDimension") ||
        (packageSize && packageSize === "both") ? (
          <div className="relative my-4 flex flex-col md:w-[20rem] md:ml-8">
            <label htmlFor="cusWeight" className="mb-2">
              Enter height
            </label>
            <input
              type="text"
              name="cusWeight"
              id="cusWeight"
              className="p-2"
              style={{ border: "1px solid #808080" }}
            />
            <div className="absolute top-10 right-4">cm</div>
          </div>
        ) : null}
      </div>
      <div className="flex md:flex-row flex-col">
        {packageSize && packageSize === "both" ? (
          <div className="relative my-4 flex flex-col md:w-[20rem]">
            <label htmlFor="cusWeight" className="mb-2">
              Enter length
            </label>
            <input
              type="text"
              name="cusWeight"
              id="cusWeight"
              className="p-2"
              style={{ border: "1px solid #808080" }}
            />
            <div className="absolute top-10 right-4">cm</div>
          </div>
        ) : null}
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      {/* //////////////////////////////// Item Quantity ////////////////////////////////////////// */}
      {/* ----------------------------------------------------------------------------------------- */}
      <Typography fontWeight="600" marginTop={2}>
        How many items are in the delivery? *
      </Typography>
      <div className="w-[15rem] flex justify-around items-center my-4">
        <button
          className=""
          onClick={() => {
            console.log("clicked");
            if (itemsQuantity > 1) {
              itemsQuantityDecreaseHandler((prvQty) => --prvQty);
            }
          }}
        >
          <Negcircle />
        </button>
        <div
          className="rounded-[6px] p-2 px-10 text-[24px] font-[700]"
          style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
        >
          {itemsQuantity && itemsQuantity}
        </div>
        <button
          className=""
          onClick={() => itemsQuantityIncreaseHandler((prvQty) => ++prvQty)}
        >
          <Poscircle />
        </button>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      {/* ///////////////////////////// Item Files/images ///////////////////////////////////////// */}
      {/* ----------------------------------------------------------------------------------------- */}
      <Typography fontWeight="600" marginTop={4}>
        Do you have any photos of your item(s)?
      </Typography>
      <div id="file_uplaod_container" className="text-[#CF2D39]">
        <div className="w-full flex flex-wrap justify-start">
          <Button
            // variant="contained"
            component="label"
            sx={{
              border: "1px dashed #CF2D39",
              padding: " 1rem 1.5rem",
              width: "8rem",
              height: "6rem",
              margin: "1rem 1rem 1rem 0",
            }}
          >
            <div className="text-center flex flex-col items-center">
              <img src={upload_icon} alt="" className="" />
              <div className="mt-3 font-[400]">Upload</div>
              <input
                type="file"
                accept="image/png, image/gif, image/jpeg"
                hidden
                onChange={uploadChangeHandler}
              />
            </div>
          </Button>
          {uploads?.map((upload, index) => {
            console.log(upload);
            return (
              <div
                key={index}
                className="relative border-2 w-[8rem] h-[6rem] flex justify-center items-center p-2  my-4 mr-4"
              >
                <button
                  className="cursor-pointer"
                  onClick={(event) => removeSelectedImage(event, index, upload)}
                >
                  <img
                    alt="profile user"
                    src={cancel}
                    className="w-[1.2rem] h-[1.2rem] absolute top-0 right-0"
                  />
                </button>
                <img src={upload} alt="" className="w-full h-full" />
              </div>
            );
          })}
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      {/* //////////////////////// Additional Item Information///////////////////////////////////// */}
      {/* ----------------------------------------------------------------------------------------- */}
      <Typography fontWeight="600" marginTop={4}>
        Is there is anything else that the driver needs to know about the
        item(s)?
      </Typography>
      <div className="my-4 flex flex-col md:w-[20rem] w-full">
        <label htmlFor="cusWeight" className="mb-2">
          Select any extra field
        </label>
        <select
          name=""
          id=""
          style={{ border: "1px solid #808080" }}
          className="bg-[#fff] p-2 py-[9.5px]"
          onChange={(e) => extraFieldChangeHandler(e.target.value)}
        >
          <option value="select" className="">
            Select
          </option>
          <option value="gateNumber" className="checked">
            Gate number
          </option>
          <option value="blockNumber" className="">
            Block number
          </option>
          <option value="streetNumber" className="">
            Street number
          </option>
        </select>
      </div>
      {extraField && extraField === "gateNumber" ? (
        <div className="flex flex-col md:w-[20rem] w-full my-4">
          <label htmlFor="gateNumber" className="mb-2">
            Gate number
          </label>
          <input
            type="text"
            name="gateNumber"
            id="gateNumber"
            className="p-2"
            style={{ border: "1px solid #808080" }}
            onChange={(e) => setExtraFieldInput(e.target.value)}
          />
        </div>
      ) : null}
      {extraField && extraField === "blockNumber" ? (
        <div className="flex flex-col md:w-[20rem] w-full my-4">
          <label htmlFor="blockNumber" className="mb-2">
            Block number
          </label>
          <input
            type="text"
            name="blockNumber"
            id="blockNumber"
            className="p-2"
            style={{ border: "1px solid #808080" }}
            onChange={(e) => setExtraFieldInput(e.target.value)}
          />
        </div>
      ) : null}
      {extraField && extraField === "streetNumber" ? (
        <div className="flex flex-col md:w-[20rem] w-full my-4">
          <label htmlFor="streetNumber" className="mb-2">
            Street number
          </label>
          <input
            type="text"
            name="streetNumber"
            id="streetNumber"
            className="p-2"
            style={{ border: "1px solid #808080" }}
            onChange={(e) => setExtraFieldInput(e.target.value)}
          />
        </div>
      ) : null}
      {/* ----------------------------------------------------------------------------------------- */}
      {/* ////////////////////////////////// Save Item Information //////////////////////////////// */}
      {/* ----------------------------------------------------------------------------------------- */}
      <div className="saveItemBtn w-full flex justify-end pr-[1rem] mt-8 hover:cursor-pointer">
        <Typography
          onClick={() => handleSaveItem()}
          color="primary"
          fontWeight={"700"}
        >
          Save Item
        </Typography>
      </div>
    </div>
  );
};
