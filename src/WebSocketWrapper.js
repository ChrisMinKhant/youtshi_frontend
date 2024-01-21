import Cookies from "js-cookie";

export class WebSocketWrapper {
  constructor() {}

  setBusNumber(busNumber) {
    Cookies.set("busNumber", busNumber);
  }

  setSessionId(sessionId) {
    Cookies.set("sessionId", sessionId);
  }

  setSessionWebSocketConnection(webSocketConnection) {
    localStorage.setItem("webSocketConnection", JSON.stringify(webSocketConnection));
  }

  getBusNumber() {
    return Cookies.get("busNumber");
  }

  getSessionId() {
    return Cookies.get("sessionId");
  }

  getWebSocketConnection() {
    return Cookies.get("webSocketConnection");
  }

  // get() {
  //   if (WebSocketWrapper.instance == null) {
  //     WebSocketWrapper.instance = new WebSocketWrapper();
  //     return WebSocketWrapper.instance;
  //   }

  //   return WebSocketWrapper.instance;
  // }

  sendToConnection(request) {
    var ws = localStorage.getItem("webSocketConnection");
    console.log(JSON.parse(ws).send(request))
  }

  deleteSession() {
    Cookies.remove("busNumber");
    Cookies.remove("sessionId");
    Cookies.remove("webSocketConnection");
  }
}
