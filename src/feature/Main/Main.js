import { useEffect, useRef, useState } from "react";
import axios from "axios";

import "../../index.css";

import LocationComponent from "./component/LocationComponent";
import ButtonComponent from "./component/ButtonComponent";
import LatestLocationComponent from "./component/LatestLocationComponent";
import { ConnectedWebSocket, location } from "../..";
import Cookies from "js-cookie";
import { Location } from "../../Location";

function Main() {
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

  // Notify event related part
  let notifyRequest = {
    BusNumber: 25,
    ArrivedAddress: "",
  };

  function handleSubmit(event) {
    event.preventDefault();
    notifyRequest.ArrivedAddress = location.getLatest();

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
    location.setLatest(event);
    console.log(location.getLatest());
  }

  return (
    <form className="main-layout full-screen" onSubmit={handleSubmit}>
      <LatestLocationComponent
        locationMessage={location.getLatest()}
        clickMessage={handleMessageBox}
        isHidden={isHidden}
      ></LatestLocationComponent>
      <LocationComponent onChange={handleOnChange}></LocationComponent>
      <ButtonComponent
        locationMessage={location.getLatest()}
        clickSubmit={clickSubmit}
      ></ButtonComponent>
    </form>
  );
}

export default Main;
