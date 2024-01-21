import React, { useState, reducer, useReducer, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../src/index.css";

import Login from "./feature/Login/Login";
import Main from "./feature/Main/Main";

export const ConnectedWebSocket = new WebSocket("ws://localhost:8000/ws");

export default function App() {
  
  const [authentication, setAuthentication] = useState(false);

  function authenticate() {
    setAuthentication(!authentication);
  }

  if (authentication) {
    return (
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    );
  } else {
    return (
      <React.StrictMode>
        <Login changeAuthenticationStatus={authenticate} />
      </React.StrictMode>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
