import "bulma/css/bulma.min.css"
import "../../../index.css"

function LocationComponent({ onChange }) {

    return (
        <div className="location-layout">
            <div className="select is-rounded is-danger">
                <select className="is-focus" onChange={event => onChange(event.target.value)}>
                    <option value={""} >Location</option>
                    <option value={"South Okkalapa"}>South Okkalapa</option>
                    <option value={"Insein"}>Insein</option>
                </select>
            </div>
        </div>
    )
}

export default LocationComponent;