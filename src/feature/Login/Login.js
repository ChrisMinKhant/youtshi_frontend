import ButtonComponent from "./component/ButtonComponent.js";
import TextAreaComponent from "./component/TextAreaComponent.js";
import { WebSocketWrapper } from "../../WebSocketWrapper.js";
import "../../index.css";
import Cookies from "js-cookie";
import { ConnectedWebSocket } from "../../index.js";
import { useEffect } from "react";

function Login({ changeAuthenticationStatus }) {
  useEffect(() => {
    ConnectedWebSocket.onmessage = (event, flag) => {
      Cookies.set("sessionId", JSON.stringify(event.data));
    };
  }, []);
  
  function handleOnSubmit(event) {
    event.preventDefault();

    const loginRequest = {
      BusNumber: Number.parseInt(event.target[0].value),
    };

    ConnectedWebSocket.send(JSON.stringify(loginRequest));

    changeAuthenticationStatus();
  }

  return (
    <form className="main-layout full-screen" onSubmit={handleOnSubmit}>
      <TextAreaComponent></TextAreaComponent>
      <ButtonComponent></ButtonComponent>
    </form>
  );
}

export default Login;
