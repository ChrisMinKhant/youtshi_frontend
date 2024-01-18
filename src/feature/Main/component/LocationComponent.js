import "bulma/css/bulma.min.css"
import "../style/LocationStyle.css"

function LocationComponent({ onChange }) {

    return (
        <div className="location-layout">
            <div className="select is-rounded is-danger">
                <select className="is-focus" onChange={event => onChange(event.target.value)}>
                    <option value={""} >Location</option>
                    <option value={"South Okkalapa"}>South Okkalapa</option>
                </select>
            </div>
        </div>
    )
}

export default LocationComponent;