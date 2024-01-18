import React from "react";
import { ReactComponent as AddBulkUpload } from "../../assets/svg/addBulkUpload.svg";
// import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const BulkUpload = () => {
  // const navigate = useNavigate();
  const [file, setFile] = React.useState();
  const fileReader = new FileReader();
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleDownloadBulkData = (e) => {
    e.preventDefault();
    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;
      };
      fileReader.readAsText(file);
    }
  };
  return (
    <>
      <div>
        <h1 className="font-[700] text-[25px] xl:text-[23px] leading-[30px] text-black">
          Bulk Delivery
        </h1>
        <p className="mt-[10px] text-black/[50%]">
          Upload multiple deliveries and tell us where they are going.
        </p>
      </div>
      <div className="bg-white py-6 px-[4rem] shadow-lg mt-[21px]">
        <div className="mt-[43px]">
          <h1 className="font-[700] text-[25px] xl:text-[23px] leading-[30px] text-black">
            Import Deliveries
          </h1>
        </div>
        <form
          onUpload
          id="myfile_container"
          className="flex justify-center mt-[125px]"
        >
          <Button
            // variant="contained"
            component="label"
            sx={{
              width: "11rem",
              height: "11rem",
              borderRadius: "10rem",
              margin: "1rem 1rem 1rem 0",
            }}
          >
            <div className="text-center flex flex-col flex-wrap items-center">
              <AddBulkUpload />
              <input
                type="file"
                accept={".csv"}
                id={"csvFileInput"}
                hidden
                onChange={handleOnChange}
              />
            </div>
          </Button>
        </form>
        <div className="flex flex-col justify-center items-center mb-[38px]">
          <p className="mt-[26px] font-[400] text-black/[50%] text-[16px] text-center">
            Import a .csv to bring in deliveries from a local file
          </p>
          <h1 className="font-[700] text-[25px] xl:text-[23px] leading-[30px] text-[#CF2D39] mt-[26px] text-center">
            <button onClick={() => handleDownloadBulkData()}>
              DOWNLOAD CSV TEMPLATE
            </button>
          </h1>
        </div>
      </div>
    </>
  );
};

export default BulkUpload;
