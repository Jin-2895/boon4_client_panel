import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import upload_icon from "../../../assets/images/upload-icon.png";
import { applyForVerifyingAccount } from "../../../store/Reducer/AuthApi";
import { showMessage } from "../../../store/shared_stateSlice";
import "./style.css";
import cancel from "../../../assets/hompage_icons/cancel.png";
import { UI_API } from "../../../services/constant";
import SideTwo from "../../../components/CommonComponents/SideTwo";

const BusinessVerificationPage = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [uploads, setUploads] = useState([]);
  // const { signupInfo } = useSelector((state) => state.auth_userData);
  const { signupData } = useSelector((state) => state.shared_state);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (uploads.length === 0) {
        setUploads([event.target.files[0]]);
      } else {
        setUploads([...uploads, event.target.files[0]]);
      }
    }
  };
  const submit = (e) => {
    setAuthLoading(true);
    e.preventDefault();
    let payload = UI_API._generateFormData({ addFiles: uploads });
    let _data = {
      payload,
      navigate,
      path: "/account-verified",
    };
    if (uploads.length >= 2) {
      dispatch(applyForVerifyingAccount(_data));
      setAuthLoading(false);
    } else {
      dispatch(showMessage("Please upload 2 Documents front and back"));
      setAuthLoading(false);
    }
  };

  const removeSelectedImage = (event, indx) => {
    event.preventDefault();
    const s = uploads.filter((item, index) => index !== indx);
    setUploads(s);
  };
  return (
    <div className="flex w-[100%]">
      {/* side one  */}
      <div className="flex w-[100%] lg:w-[50%] flex-col justify-center items-center">
        <form
          id="form"
          className="flex flex-col justify-center mt-4 h-full mx-5"
        >
          <div className="my-5">
            <Link
              to="/"
              className="text-[#CF2D39] font-[700] inline  hover:text-[#b0242f]"
            >
              Skip
            </Link>
          </div>
          <div className="">
            <h1 className="leading-[135%] mb-2 text-lg font-bold">
              Start your verification today
            </h1>
            <p className="text-[grey] text-sm leading-[135%]">
              {signupData?.isBusiness == true ? (
                <>
                  Send us your business documents image so our Boon4 admin team
                  can verify it.
                </>
              ) : (
                <>
                  Send us your mykard image so our Boon4 admin team can verify
                  it.
                </>
              )}
            </p>
          </div>
          <div id="file" className="mt-10">
            <p className="leading-[135%] mb-2 text-md text-[rgba(0, 0, 0, 1)] font-bold">
              {signupData?.isBusiness == true ? (
                <>Upload your business documents e.g SSM</>
              ) : (
                <>Upload back and front of your mykard as image.</>
              )}
            </p>
            <div id="file_uplaod_container" className="text-[#CF2D39] mt-8">
              <div className="w-full flex flex-wrap justify-start">
                <Button
                  // variant="contained"
                  component="label"
                  sx={{
                    borderRadius: "0px",
                    border: "1px dashed #CF2D39",
                    padding: "1rem 1.5rem",
                    width: "8rem",
                    height: "6rem",
                    margin: "1rem 1rem 1rem 0",
                  }}
                >
                  <div className="text-center flex flex-col flex-wrap items-center">
                    <img src={upload_icon} alt="upload_icon" className="mt-2" />
                    <div className="mt-1">Upload</div>
                    <input
                      accept="application/pdf,application/vnd.ms-excel"
                      type="file"
                      name="addFiles"
                      id="fileInput"
                      hidden
                      onChange={onImageChange}
                    />
                  </div>
                </Button>
                {uploads.length > 0 &&
                  uploads.map((upload, index) => {
                    return (
                      <div
                        key={index}
                        className="relative w-[8rem] h-[6rem] flex justify-center items-center p-2  my-4 mr-4 border-[0.2px] border-gray-300"
                      >
                        <button
                          className="cursor-pointer"
                          onClick={(event) => removeSelectedImage(event, index)}
                        >
                          <img
                            alt="button"
                            type="button"
                            src={cancel}
                            className="w-[1.2rem] h-[1.2rem] absolute top-0 right-0"
                          />
                        </button>
                        <img
                          src={URL.createObjectURL(upload)}
                          alt="button"
                          className="w-full h-full"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div id="Buttons" type="submit" className="mt-5 w-[100%] md:w-[55%]">
            {uploads.length >= 2 ? (
              <button
                type="submit"
                onClick={submit}
                className={`${
                  authLoading
                    ? "bg-[#dad3d3] hover:bg-[#dad3d3]"
                    : "bg-[#CF2D39] hover:bg-[#b0242f]"
                } relative shadow-md w-full p-2 text-white `}
              >
                Submit for verification
                {authLoading && (
                  <div className="absolute top-[30%] left-[47%]">
                    <CircularProgress size={"20px"} />
                  </div>
                )}
              </button>
            ) : null}
          </div>
        </form>
      </div>
      {/* side two  */}
      <SideTwo />
    </div>
  );
};

export default BusinessVerificationPage;
