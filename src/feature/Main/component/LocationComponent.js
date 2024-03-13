import "bulma/css/bulma.min.css";
import "../../../index.css";

function LocationComponent({ onChange }) {
  return (
    <div className="location-layout">
      {/* <div className="select is-rounded is-danger">
        <select
          className="is-focus"
          onChange={(event) => onChange(event.target.value)}
        >
          <option value={""}>Location</option>
          <option value={"၁၀ ရပ်ကွက်စျေး"}>၁၀ ရပ်ကွက်စျေး</option>
          <option value={"ပဒေသာလမ်းစုံ"}>ပဒေသာလမ်းစုံ</option>
          <option value={"မေတ္တာလမ်း ဓမ္မာရုံ"}>မေတ္တာလမ်း ဓမ္မာရုံ</option>
          <option value={"ဆရာလေးကျောင်း"}>ဆရာလေးကျောင်း</option>
          <option value={"ရတနာလမ်း"}>ရတနာလမ်း</option>
          <option value={"ဂိတ်ဟောင်း"}>ဂိတ်ဟောင်း</option>
          <option value={"အထင်ကရ"}>အထင်ကရ</option>
        </select>
      </div> */}

      <div class="control">
        <input class="input is-danger is-rounded" type="text" placeholder="Enter Check Point" onChange={(event) => onChange(event.target.value)}></input>
      </div>
    </div>
  );
}

export default LocationComponent;
