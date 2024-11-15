import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-7xti7mnfym5msahq.us.auth0.com"
     clientId="tqyzHxOuZgBII146i8XKNERzEU2m5ZkG"
     authorizationParams={{
      redirect_uri: "https://t3-flax.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
