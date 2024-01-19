import "../../../index.css"

function ButtonComponent({ locationMessage, clickSubmit }) {
    return (
        (locationMessage != "" && (<div className="button-layout">
            <input className="button is-danger is-rounded" type="submit" value="YOUT SHI" onClick={clickSubmit}></input>
        </div>))
    );
};

export default ButtonComponent;