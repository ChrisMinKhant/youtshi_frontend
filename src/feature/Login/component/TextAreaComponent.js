import "bulma/css/bulma.min.css"
import "../../../index.css"

function TextAreaComponent() {
    return (
        <div className="location-layout">
            <input className="input is-rounded is-danger" type="text" placeholder="Your Bus Number" name="busNumber"></input>
        </div>
    )
}

export default TextAreaComponent;