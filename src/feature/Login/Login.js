import ButtonComponent from "./component/ButtonComponent.js";
import TextAreaComponent from "./component/TextAreaComponent.js";
import "../../index.css";
import { ConnectedWebSocket, location } from "../../index.js";
import { useCookies } from "react-cookie";

function Login({ changeAuthenticationStatus }) {
  const [cookies, setCookie] = useCookies(["SessionId"]);

  function handleOnSubmit(event) {
    event.preventDefault();

    if (cookies.SessionId != null) {
      ConnectedWebSocket.send(
        JSON.stringify({
          BusNumber: Number.parseInt(event.target[0].value),
          SessionId: cookies.SessionId,
        })
      );
    } else {
      ConnectedWebSocket.send(
        JSON.stringify({
          BusNumber: Number.parseInt(event.target[0].value),
          SessionId: 0,
        })
      );
    }

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
