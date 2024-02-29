import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "./Wrapper";
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <GoogleOAuthProvider clientId="382834187626-t7ptd65tfp5uinpdjpaknq9gfj2qlk64.apps.googleusercontent.com">
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <App />
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
