import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./MuiTheme";
import { Provider } from "react-redux";
import Auth from "./components/Auth/Auth";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <Auth>
          <App />
        </Auth>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
