import "bulma/css/bulma.min.css"
import "../../../index.css"

function ButtonComponent() {
    return (
        <div className="button-layout">
            <input className="button is-danger is-rounded" type="submit" value="LOGIN"></input>
        </div>
    )
}

export default ButtonComponent;