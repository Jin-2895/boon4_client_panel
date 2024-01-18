import axios from "axios";

export const setSession = (access_token, refresh_token) => {
  if (access_token) {
    localStorage.setItem("jwt_access_token", JSON.stringify(access_token));
    localStorage.setItem("jwt_refresh_token", JSON.stringify(refresh_token));
    localStorage.setItem("authCheck", JSON.stringify("true"));
    /* Setting the authorization header for all axios requests. */
    axios.defaults.headers.common["authorization"] = "Bearer " + access_token;
  } else {
    localStorage.removeItem("jwt_access_token");
    localStorage.removeItem("jwt_refresh_token");
    localStorage.removeItem("authCheck");
    localStorage.removeItem("userCountry&Time");
    delete axios.defaults.headers.common["authorization"];
  }
};
export const allowAccess = axios.create({
  headers: {
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem("jwt_access_token")
    )}`,
  },
});
export const getAccessToken = () => {
  return window.JSON.parse(localStorage.getItem("jwt_access_token"));
};
export const getRefreshToken = () => {
  return window.JSON.parse(localStorage.getItem("jwt_refresh_token"));
};
export const authCheck = () => {
  return window.JSON.parse(localStorage.getItem("authCheck"));
};
