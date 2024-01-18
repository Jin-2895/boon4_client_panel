import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { signInWithPopup } from "firebase/auth";
import { getUserData, userDataError } from "./store/ApiSlice/UserSlice";
import axios from "axios";
import Domain from "./services/Endpoint";
import { showMessage } from "./store/shared_stateSlice";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  clientId: process.env.REACT_APP_CLIENTID,
});

export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
provider.addScope("email");
provider.addScope("profile");

export const signInWithGoogle = async (dispatch, navigate) => {
  try {
    const { ...result } = await signInWithPopup(auth, provider);
    console.log({
      email: result.user.providerData[0].email,
      password: result.user.accessToken,
      provider: "google",
    });
    if (result.operationType === "signIn") {
      const { data } = await axios.post(`${Domain}/api/user/login`, {
        email: result.user.providerData[0].email,
        password: result.user.accessToken,
        provider: "google",
      });
      if (data.status === 200) {
        navigate("/");
      }
      console.log(data);
    }
  } catch (error) {
    if (error.response.data.message && error.message) {
      dispatch(showMessage(error.response.data.message));
    } else {
      dispatch(showMessage(error.message));
    }
  }
};

export const signUpWithGoogle = async (dispatch, navigate) => {
  try {
    const data = await signInWithPopup(auth, provider);
    console.log(data);
    if (data && data.user) {
      const user = data.user;
      dispatch(
        getUserData({
          name: user?.providerData[0]?.displayName,
          email: user?.providerData[0]?.email,
          password: user?.accessToken,
          provider: "google",
          otpVerifiedStatus: user?.emailVerified,
        })
      );
    }
  } catch (error) {
    if (error.message) {
      dispatch(showMessage(error.message));
    } else {
      dispatch(showMessage(error));
    }
  }
};

const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = async (dispatch, navigate) => {
  try {
    const { ...result } = await signInWithPopup(auth, facebookProvider);
    if (result && result.user) {
      const user = result.user.multiFactor.user;
      dispatch(
        getUserData({
          name: user?.displayName,
          email: user?.email,
          phone: user?.phoneNumber,
        })
      );
      navigate("/");
    }
  } catch (error) {
    console.log(error);
    dispatch(userDataError(error.message));
  }
};

export const signUpWithFacebook = async (dispatch, navigate) => {
  try {
    const { ...result } = await signInWithPopup(auth, facebookProvider);
    if (result && result.user) {
      const user = result.user.multiFactor.user;
      dispatch(
        getUserData({
          name: user?.displayName,
          email: user?.email,
          phone: user?.phoneNumber,
        })
      );
      navigate("/signup");
    }
  } catch (error) {
    console.log(error);
    dispatch(userDataError(error.message));
  }
};
