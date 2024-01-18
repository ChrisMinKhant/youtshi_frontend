import LocationComponent from "./component/LocationComponent";
import ButtonComponent from "./component/ButtonComponent";
import "./style/MainStyle.css"
import LatestLocationComponent from "./component/LatestLocationComponent";
import { useState } from "react";
import axios from "axios";

function Main() {

    const [latestLocation, setLatestLocation] = useState("")

    let notifyRequest = {
        "BusNumber": 0,
        "ArrivedAddrss": "Monywar"
    }

    let config = {
        headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "http://localhost:8000"
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        notifyRequest.ArrivedAddrss = latestLocation

        console.log(notifyRequest)

        axios.post("http://localhost:8000/notify",
            notifyRequest,
            config
        ).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    function handleOnChange(event) {
        setLatestLocation(event)
    }

    return (
        <form className="main-layout full-screen" onSubmit={handleSubmit}>
            <LatestLocationComponent ></LatestLocationComponent>
            <LocationComponent onChange={handleOnChange}></LocationComponent>
            <ButtonComponent ></ButtonComponent>
        </form>
    );
};

export default Main;