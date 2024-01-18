import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { applyForVerifyingAccount } from "../../store/Reducer/AuthApi";
import { showMessage } from "../../store/shared_stateSlice";
import upload_icon from "../../assets/images/upload-icon.png";
import cancel from "../../assets/hompage_icons/cancel.png";
import { UI_API } from "../../services/constant";

const Upload = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const [docUploads, setDocUploads] = useState("");
  const [deletedId, setDeletedId] = useState([]);
  const [uploads, setUploads] = useState([]);
  const [userInfo, setUserInfo] = useState("");
  const { userProfileInfo } = useSelector((state) => state.auth_userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (uploads.length === 0) {
        setUploads([event.target.files[0]]);
        setDocUploads([event.target.files[0]]);
      } else {
        setUploads([...uploads, event.target.files[0]]);
        setDocUploads([...docUploads, event.target.files[0]]);
      }
    }
  };
  const submit = (e) => {
    setAuthLoading(true);
    e.preventDefault();
    if (uploads.length >= 2) {
      const deleteFiles = deletedId.length > 0 ? deletedId.join(",") : false;
      let payload = docUploads.length > 0 ? { addFiles: docUploads } : {};
      payload = deleteFiles ? { ...payload, deleteFiles } : payload;
      payload = UI_API._generateFormData(payload);
      let _data = {
        payload,
        navigate,
        path: "/profile-info",
      };
      dispatch(applyForVerifyingAccount(_data));
      setAuthLoading(false);
    } else {
      dispatch(showMessage("Please upload 2 Documents front and back"));
      setAuthLoading(false);
    }
  };
  const removeSelectedImage = (event, indx, id) => {
    event.preventDefault();
    const s = uploads.filter((item, index) => index !== indx);
    setUploads(s);
    if (deletedId.length === 0) {
      setDeletedId([`${id}`]);
    } else {
      setDeletedId([...deletedId, `${id}`]);
    }
  };
  React.useEffect(() => {
    if (userProfileInfo) {
      setUserInfo(userProfileInfo?.user);
      setUploads(...[userProfileInfo?.user?.documents]);
    }
  }, [userProfileInfo]);
  return (
    <>
      <div id="file" className="mt-10">
        {userInfo?.role === "sender" ? (
          <>
            <p className="font-[700] text-[20px] leading-[24px]">
              Mykard information
            </p>
            <p className="font-[400] text-[16px] leading-[23.2px] text-black opacity-50 mt-2 lg:mt-4">
              Upload your identification card photos front and back
            </p>
          </>
        ) : (
          <>
            <p className="font-[700] text-[20px] leading-[24px]">
              Mykard information
            </p>
            <p className="font-[400] text-[16px] leading-[23.2px] text-black opacity-50 mt-2 lg:mt-4">
              You can still see and update your mykard if requried
            </p>
          </>
        )}
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
            {uploads?.map((upload, index) => {
              return (
                <div
                  key={upload.id}
                  className="relative w-[8rem] h-[6rem] flex justify-center items-center p-2  my-4 mr-4 border-[0.2px] border-gray-300"
                >
                  <button
                    className="cursor-pointer"
                    onClick={(event) =>
                      removeSelectedImage(event, index, upload.id)
                    }
                  >
                    <img
                      alt="profile user"
                      src={cancel}
                      className="w-[1.2rem] h-[1.2rem] absolute top-0 right-0"
                    />
                  </button>
                  <img
                    src={
                      upload?.uri ? upload?.uri : URL.createObjectURL(upload)
                    }
                    alt="uploads user documents"
                    className="w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="Buttons" type="submit" className="mt-5 w-[100%] lg:w-[30%]">
        {uploads?.length >= 2 ? (
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
    </>
  );
};

export default Upload;
