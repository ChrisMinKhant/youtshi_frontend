import LocationComponent from "./component/LocationComponent";
import ButtonComponent from "./component/ButtonComponent";
import "../../index.css"
import LatestLocationComponent from "./component/LatestLocationComponent";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function Main() {
    // State for message box
    const [isHidden, setIsHidden] = useState(false)

    // Change the state of the message box
    function handleMessageBox() {
        setIsHidden(!isHidden)
    }

    function clickSubmit() {
        if (isHidden) {
            setIsHidden(!isHidden)
        }
    }
    // Websocket related part
    const webSocketRequest = {
        BusNumber: 25
    }

    const [latestLocation, setLatestLocation] = useState("")

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8000/ws")

        ws.addEventListener("open", (event) => {
            ws.send(JSON.stringify(webSocketRequest))
        })

        ws.addEventListener("message", (event) => {
            console.log(event)
        })

    }, [])

    // Notify event related part
    let notifyRequest = {
        BusNumber: 25,
        ArrivedAddress: ""
    }

    function handleSubmit(event) {
        event.preventDefault()

        notifyRequest.ArrivedAddress = latestLocation

        axios.post("http://localhost:8000/notify",
            notifyRequest
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
            <LatestLocationComponent locationMessage={latestLocation} clickMessage={handleMessageBox} isHidden={isHidden}></LatestLocationComponent>
            <LocationComponent onChange={handleOnChange}></LocationComponent>
            <ButtonComponent locationMessage={latestLocation} clickSubmit={clickSubmit}></ButtonComponent>
        </form>
    );
};

export default Main;