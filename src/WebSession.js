export class WebSession {

    sessionData = {
        busNumber: 0,
        sessionId: 0,
        webSocketConnection: null
    }

    constructor() {

    }

    setBusNumber(busNumber) {
        this.sessionData.busNumber = busNumber
    }

    setSessionId(sessionId) {
        this.sessionData.sessionId = sessionId
    }

    setSessionWebSocketConnection(webSocketConnection) {
        this.sessionData.webSocketConnection = webSocketConnection
    }

    getBusNumber() {
        return this.sessionData.busNumber
    }

    getSessionId() {
        return this.sessionData.sessiongId
    }

    getWebSocketConnection() {
        return this.sessionData.webSocketConnection
    }

    get() {
        return this.sessionData
    }

    deleteSession() {
        this.sessionData = {
            busNumber: 0,
            sessiongId: 0,
            webSocketConnection: null
        }
    }
}