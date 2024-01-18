import homeSvg from "../../assets/svg/homeIcon1.svg";
import homeSvgActive from "../../assets/svg/homeIcon1Active.svg";
import getEstimate from "../../assets/svg/getEstimateIcon.svg";
import getEstimateActive from "../../assets/svg/getEstimateIconActive.svg";
import bulkUpload from "../../assets/svg/bulkUploadIcon.svg";
import bulkUploadActive from "../../assets/svg/bulkUploadIconActive.svg";
import createJob from "../../assets/svg/createJobIcon.svg";
import createJobActive from "../../assets/svg/createJobIconActive.svg";
import profileSvg from "../../assets/svg/profileInfoIcon.svg";
import profileSvgActive from "../../assets/svg/profileInfoIconActive.svg";
import addressSvg from "../../assets/svg/saveAddressIcon.svg";
import addressSvgActive from "../../assets/svg/saveAddressIconActive.svg";
import historySvg from "../../assets/svg/jobHistoryIcon.svg";
import historySvgActive from "../../assets/svg/jobHistoryIconActive.svg";
import languageSvg from "../../assets/svg/languageIcon.svg";
import languageSvgActive from "../../assets/svg/languageIconActive.svg";
import logoutSvg from "../../assets/svg/logoutIcon.svg";
import logoutSvgActive from "../../assets/svg/logoutIconActive.svg";

export const sidebarRoutes1 = [
  {
    id: 33,
    title: "Home",
    icon: homeSvg,
    active: homeSvgActive,
    route: "/",
  },
  {
    id: 44,
    title: "Get an Estimate",
    icon: getEstimate,
    active: getEstimateActive,
    route: "/get-estimator",
  },
  {
    id: 55,
    title: "Bulk Upload",
    icon: bulkUpload,
    active: bulkUploadActive,
    route: "/bulk-upload",
  },
  {
    id: 66,
    title: "Create Job",
    icon: createJob,
    active: createJobActive,
    route: "/create-job",
  },
  {
    id: 77,
    title: "Profile Info",
    icon: profileSvg,
    active: profileSvgActive,
    route: "/profile-info",
  },
  {
    id: 88,
    title: "Saved Address",
    icon: addressSvg,
    active: addressSvgActive,
    route: "/saved-address",
  },
  {
    id: 99,
    title: "Job History",
    icon: historySvg,
    active: historySvgActive,
    route: "/job-history",
  },
];

export const sidebarRoutes2 = [
  {
    id: 11,
    title: "Languages",
    icon: languageSvg,
    active: languageSvgActive,
    route: "/languages",
  },
  {
    id: 22,
    title: "Logout",
    icon: logoutSvg,
    active: logoutSvgActive,
    route: "/logout",
  },
];
