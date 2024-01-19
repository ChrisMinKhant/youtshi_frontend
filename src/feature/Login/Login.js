import ButtonComponent from "./component/ButtonComponent";
import TextAreaComponent from "./component/TextAreaComponent";
import { WebSession } from "../../WebSession.js"
import "../../index.css"
import Cookies from "js-cookie";
import { json } from "react-router-dom";

function Login() {
    const session = new WebSession()

    function handleOnSubmit(event) {
        event.preventDefault()

        const loginRequest = {
            BusNumber: event.target[0].value
        }

        session.setBusNumber(event.target[0].value)

        Cookies.set("busNumber", session.getBusNumber())
        Cookies.set("sessionId", session.getSessionId())
        Cookies.set("webSocketConnection", session.getWebSocketConnection())

        const gotSession = new WebSession()

        gotSession.setBusNumber(Cookies.get("busNumber"))

        console.log(gotSession.getBusNumber())

        session.deleteSession()

        console.log(gotSession.getBusNumber())

    }

    return (
        <form className="main-layout full-screen" onSubmit={handleOnSubmit}>
            <TextAreaComponent></TextAreaComponent>
            <ButtonComponent></ButtonComponent>
        </form>
    )
}

export default Login;