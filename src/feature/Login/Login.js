import ButtonComponent from "./component/ButtonComponent.js";
import TextAreaComponent from "./component/TextAreaComponent.js";
import { WebSocketWrapper } from "../../WebSocketWrapper.js";
import "../../index.css";
import { ConnectedWebSocket, location } from "../../index.js";
import { useEffect } from "react";
import { useCookies, CookiesProvider } from "react-cookie";
import { latestLocation } from "../Main/Main.js";

function Login({ changeAuthenticationStatus }) {
  const [cookies, setCookie] = useCookies(["SessionId"]);

  useEffect(() => {
    ConnectedWebSocket.onmessage = (event) => {
      const wsMessage = JSON.parse(event.data);

      if (wsMessage.SessionId != null) {
        console.log(wsMessage.SessionId);
        setCookie("SessionId", wsMessage.SessionId, { path: "/" });
      } else {
        location.setLatest(wsMessage);
      }
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
