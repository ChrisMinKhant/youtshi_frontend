import { useEffect, useState } from "react";
import axios from "axios";

import "../../index.css";

import LocationComponent from "./component/LocationComponent";
import ButtonComponent from "./component/ButtonComponent";
import LatestLocationComponent from "./component/LatestLocationComponent";
import { ConnectedWebSocket } from "../..";
import { useCookies } from "react-cookie";

function Main() {
  const [cookies, setCookie] = useCookies(["SessionId"]);

  useEffect(() => {
    ConnectedWebSocket.onmessage = (event) => {
      const wsMessage = JSON.parse(event.data);

      if (wsMessage.SessionId != 0 && wsMessage.SessionId != null) {
        console.log(wsMessage.SessionId);
        setCookie("SessionId", wsMessage.SessionId, { path: "/" });
      } else if (wsMessage.SessionId == null) {
        console.log(wsMessage);
        setUpdateLocation(wsMessage);
      }
    };
  }, []);

  // State for message box
  const [isHidden, setIsHidden] = useState(false);

  const [updateLocation, setUpdateLocation] = useState("");
  // Change the state of the message box
  function handleMessageBox() {
    setIsHidden(!isHidden);
  }

  function clickSubmit() {
    if (isHidden) {
      setIsHidden(!isHidden);
    }
  }

  // Notify event related part
  let notifyRequest = {
    BusNumber: 25,
    ArrivedAddress: "",
  };

  function handleSubmit(event) {
    event.preventDefault();
    notifyRequest.ArrivedAddress = updateLocation;

    axios
      .post("http://localhost:8000/notify", notifyRequest)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleOnChange(event) {
    setUpdateLocation(event);
  }

  return (
    <form className="main-layout full-screen" onSubmit={handleSubmit}>
      <LatestLocationComponent
        locationMessage={updateLocation}
        clickMessage={handleMessageBox}
        isHidden={isHidden}
      ></LatestLocationComponent>
      <LocationComponent onChange={handleOnChange}></LocationComponent>
      <ButtonComponent
        locationMessage={updateLocation}
        clickSubmit={clickSubmit}
      ></ButtonComponent>
    </form>
  );
}

export default Main;
