import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./pages/AuthPages/Login.page";
import NotFound from "./pages/notfound/NotFound.page";
import Layout from "./components/misc/Layout";
import ProtectedRoute from "./services/ProtectedRoutes";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import { hideMessage } from "./store/shared_stateSlice";
import ForgotPasswordPage from "./pages/AuthPages/ForgotPasswordPage";
import SignUpPage from "./pages/AuthPages/SignupPage";
import OtpPage from "./pages/AuthPages/OtpPage";
import NewPasswordPage from "./pages/AuthPages/NewPasswordPage";
import TermsConditionsPage from "./pages/AuthPages/TermsConditionsPage";
import BusinessVerificationPage from "./pages/AuthPages/business-verification/BusinessVerificationPage";
import HomePage from "./pages/HomePage";
import CreateJobPage from "./pages/CreateJobPage/CreateJobPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { AccountSuccess } from "./pages/Responses/AccountSuccess";
import ResendEmail from "./pages/AuthPages/ResendEmail";
import { PasswordReset } from "./pages/Responses/PasswordReset";
import SavedAddress from "./pages/SavedAddress/SavedAddress";
import BulkUpload from "./pages/BulkUpload/BulkUpload";
import SavePlace from "./pages/SavedAddress/SavePlace";
import { GetEstimator } from "./pages/GetEstimator/GetEstimator";
import { DeliveryEstimator } from "./pages/GetEstimator/DeliveryEstimator";
import Geocode from "react-geocode";
import JobHistory from "./pages/JobHistory/JobHistory";
import SingleJobDetails from "./pages/JobHistory/SingleJobDetails";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const userLocationWithTime = JSON.parse(
    localStorage.getItem("userCountry&Time")
  );
  // show alert message setup for global use -----------------------------------------------------
  const alertMessage = useSelector(({ shared_state }) => shared_state);
  const alert = alertMessage.alertState;
  const { vertical, horizontal, open } = alert;
  const autoCheck = JSON.parse(localStorage.getItem("authCheck"));
  // ---------------------------------------------------------------------------------------------
  useEffect(() => {
    // it will hide alert message after 3secs globaly ------------------------------------------
    if (alertMessage.alertState.open) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 3000);
    }
    // -------------------------------------------------------------------------------------------
  }, [alertMessage, dispatch]);

  useEffect(() => {
    if (autoCheck === true) {
      if (location.pathname) {
        if (location.pathname.state != null) {
          navigate(location.state.from);
        }
      }
    }
  }, [autoCheck]);

  useEffect(() => {
    if (!userLocationWithTime) {
      const date = new Date();
      const dateAsString = date.toString();
      const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];
      let s = timezone.split(/(?<=^\S+)\s/);
      localStorage.setItem("userCountry&Time", JSON.stringify(s[0]));
    }
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/verify-otp" element={<OtpPage />} />
        <Route path="/reset-password" element={<NewPasswordPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/resend-email" element={<ResendEmail />} />

        <Route
          path="/business-verification"
          element={<BusinessVerificationPage />}
        />
        <Route path="/account-verified" element={<AccountSuccess />} />
        <Route path="/pass_reset_success" element={<PasswordReset />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              {/* <ProductPage /> */}
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-job"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <CreateJobPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile-info"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-address"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <SavedAddress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/save-place/:action/:id"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <SavePlace />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bulk-upload"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <BulkUpload />
            </ProtectedRoute>
          }
        />
        <Route
          path="/get-estimator"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <GetEstimator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/delivery-estimator/:currency/:estFare"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <DeliveryEstimator />
            </ProtectedRoute>
          }
        />
        <Route
          path="/job-history"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <JobHistory />
            </ProtectedRoute>
          }
        />
        <Route
          // path="/bulkUpload/:action/:id"
          path="/bulkUpload/data"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <JobHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/single-job-details"
          element={
            <ProtectedRoute isAllowed={autoCheck ? true : false}>
              <SingleJobDetails />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        // onClose={handleClose}
        message={alertMessage.message && alertMessage.message}
        key={vertical + horizontal}
      />
    </Layout>
  );
}

export default App;
