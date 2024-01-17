import "bootstrap/dist/css/bootstrap.min.css";

import LocationComponent from "./component/LocationComponent";
import ButtonComponent from "./component/ButtonComponent";

function Main(){
    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <LocationComponent />
            <ButtonComponent />
        </div>
    );
};

export default Main;