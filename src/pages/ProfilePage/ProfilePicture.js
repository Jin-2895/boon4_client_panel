import React from "react";
import RatingComponent from "./RatingComponent";
import { useState } from "react";
import { useEffect } from "react";
import { updateProfileInfo } from "../../store/Reducer/AuthApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UI_API } from "../../services/constant";
import { ReactComponent as CancelSmall } from "../../assets/svg/cancelSmall.svg";

export const ProfilePicture = ({ userProfileInfo }) => {
  const myKardDocumentStatus = userProfileInfo?.user?.myKardDocumentStatus;
  const businessDocumentStatus = userProfileInfo?.user?.businessDocumentStatus;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [profileButton, setProfileButton] = useState(false);
  const handleProfileChange = (e) => {
    e.preventDefault();
    setProfileButton(true);
  };
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  useEffect(() => {
    if (userProfileInfo?.user?.profilePicture != null) {
      setImage({
        preview: userProfileInfo?.user?.profilePicture,
        raw: image.raw,
      });
    }
  }, [userProfileInfo]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { image: image.raw };
    payload = UI_API._generateFormData(payload);
    let _data = {
      payload,
      navigate,
      path: "/profile-info",
    };
    dispatch(updateProfileInfo(_data));
    setProfileButton(false);
  };
  return (
    <form id="form" onSubmit={(e) => handleSubmit(e)}>
      <div className={`w-full flex flex-col items-center`}>
        <div className="relative">
          <label htmlFor={profileButton === true ? "upload-button" : null}>
            {image.preview ? (
              <img
                src={image.preview}
                className="w-[10rem] h-[10rem] md:w-56 md:h-56 flex-shrink-0 rounded-full object-cover md:rounded-full xl:w-[140px] xl:h-[140px]"
                alt="person profile"
              />
            ) : (
              <svg
                width="106"
                height="106"
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53 0C23.85 0 0 23.85 0 53C0 82.15 23.85 106 53 106C82.15 106 106 82.15 106 53C106 23.85 82.15 0 53 0ZM53 15.9C62.01 15.9 68.9 22.79 68.9 31.8C68.9 40.81 62.01 47.7 53 47.7C43.99 47.7 37.1 40.81 37.1 31.8C37.1 22.79 43.99 15.9 53 15.9ZM53 91.16C39.75 91.16 28.09 84.2702 21.2 74.2C21.2 63.6 42.4 57.77 53 57.77C63.6 57.77 84.8 63.6 84.8 74.2C77.91 84.27 66.25 91.16 53 91.16Z"
                  fill="black"
                  fillOpacity="0.2"
                />
              </svg>
            )}
            {myKardDocumentStatus === "verified" ||
            businessDocumentStatus === "verified" ? (
              <div className="absolute bottom-1 right-2">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18.5" cy="18.5" r="18.5" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5109 35.5204C18.4628 35.5204 18.4366 35.5204 18.3885 35.4942C10.6568 33.322 5.65234 28.2432 5.65234 22.6094V10.2054C5.65234 9.9781 5.80532 9.80327 6.03259 9.77705C7.5973 9.54977 9.79576 8.89417 12.0947 7.95884C14.8002 6.87054 17.1997 5.5331 18.2093 4.57155C18.3885 4.39672 18.6639 4.39672 18.8169 4.57155C19.8265 5.55933 22.226 6.87054 24.9052 7.95884C27.2042 8.89417 29.4027 9.57599 30.9674 9.77705C31.1947 9.80327 31.3476 10.0043 31.3476 10.2054V22.6094C31.3476 28.2432 26.3694 33.2957 18.6377 35.4942C18.5896 35.5204 18.5634 35.5204 18.5109 35.5204Z"
                    fill="#5FD3AE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.511 32.4649C18.463 32.4649 18.4367 32.4649 18.3887 32.4387C12.1735 30.6948 8.17871 26.6257 8.17871 22.0801V12.1761C8.17871 11.9489 8.33169 11.774 8.55896 11.7478C9.76964 11.5948 11.5136 11.066 13.358 10.3055C15.5084 9.44883 17.4009 8.38675 18.2095 7.63062C18.3887 7.45142 18.664 7.47764 18.817 7.63062C19.5993 8.38675 21.4962 9.4226 23.6422 10.3055C25.4867 11.066 27.2306 11.5948 28.4412 11.7478C28.6685 11.774 28.8215 11.9751 28.8215 12.1761V22.0801C28.8215 26.6257 24.8311 30.6685 18.6159 32.4387C18.5897 32.4649 18.5635 32.4649 18.511 32.4649Z"
                    fill="#A1E5CF"
                  />
                </svg>
              </div>
            ) : null}
          </label>
          {profileButton === true ? (
            <input
              name="profilePicture"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              id="upload-button"
              style={{ display: "none" }}
              onChange={(e) => handleChange(e)}
            />
          ) : null}
        </div>
      </div>
      <RatingComponent
        rating={userProfileInfo?.user?.rating}
        review={userProfileInfo?.user?.reviewCount}
      />
      <div className="flex items-center justify-center mt-3 font-[500] text-[16px] leading-[19.2px]">
        {profileButton === false ? (
          <button
            className="text-[#CF2D39] px-4 py-2"
            onClick={(e) => handleProfileChange(e)}
          >
            Edit Profile
          </button>
        ) : (
          <div className="flex flex-row gap-2">
            <button
              className="bg-[#CF2D39] hover:bg-red-700 px-4 py-2 text-white"
              id="button"
              type="submit"
            >
              Update
            </button>
            <button
              className="text-[#CF2D39] px-1 py-1"
              onClick={() => setProfileButton(false)}
            >
              <CancelSmall />
            </button>
          </div>
        )}
      </div>
    </form>
  );
};
