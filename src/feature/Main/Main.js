import { useEffect, useRef, useState } from "react";
import axios from "axios";

import "../../index.css";

import LocationComponent from "./component/LocationComponent";
import ButtonComponent from "./component/ButtonComponent";
import LatestLocationComponent from "./component/LatestLocationComponent";
import { ConnectedWebSocket } from "../..";
import Cookies from "js-cookie";

function Main({ connectedSocket }) {
  useEffect(() => {
    ConnectedWebSocket.onmessage = (event) => {
      handleWebsocketMessage(event, "main");
    };
  }, []);

  // State for message box
  const [isHidden, setIsHidden] = useState(false);

  // Change the state of the message box
  function handleMessageBox() {
    setIsHidden(!isHidden);
  }

  function clickSubmit() {
    if (isHidden) {
      setIsHidden(!isHidden);
    }
  }

  const [latestLocation, setLatestLocation] = useState("");

  // Notify event related part
  let notifyRequest = {
    BusNumber: 25,
    ArrivedAddress: "",
  };

  function handleSubmit(event) {
    event.preventDefault();
    notifyRequest.ArrivedAddress = latestLocation;

    axios
      .post("http://localhost:8000/notify", notifyRequest)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleWebsocketMessage(event, flag) {
    switch (flag) {
      case "main":
        setLatestLocation(event.data);
        return;

      case "login":
        Cookies.set("sessionId", event.data);
        return;
    }
  }

  function handleOnChange(event) {
    setLatestLocation(event);
  }

  return (
    <form className="main-layout full-screen" onSubmit={handleSubmit}>
      <LatestLocationComponent
        locationMessage={latestLocation}
        clickMessage={handleMessageBox}
        isHidden={isHidden}
      ></LatestLocationComponent>
      <LocationComponent onChange={handleOnChange}></LocationComponent>
      <ButtonComponent
        locationMessage={latestLocation}
        clickSubmit={clickSubmit}
      ></ButtonComponent>
    </form>
  );
}

export default Main;
