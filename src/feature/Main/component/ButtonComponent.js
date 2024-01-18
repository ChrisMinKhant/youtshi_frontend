import "../style/ButtonStyle.css"

function ButtonComponent({locationMessage}) {
    return (
        (locationMessage != "" && (<div className="button-layout">
            <input className="button is-danger is-rounded" type="submit" value="YOUT SHI"></input>
        </div>))
    );
};

export default ButtonComponent;