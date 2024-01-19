import { useState } from "react";
import React from "react";

import "../style/LatestLocationStyle.css"

function LatestLocationComponent({ locationMessage, clickMessage, isHidden }) {


    return (
        <div className="latestlocation-layout">
            {!isHidden && (locationMessage != "") && (<div className="message is-danger  notification-box">
                <div className="message-header">
                    <p>Bus Notification</p>
                    <button className="delete" aria-label="delete" onClick={clickMessage}></button>
                </div>
                <div className="message-body">
                    Your bus is arriving <strong>{locationMessage}</strong>.
                </div>
            </div>)}
        </div>
    )
}

export default LatestLocationComponent;