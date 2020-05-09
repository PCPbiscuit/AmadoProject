import React from "react";

function Checkoutopts() {
  return (
    <div className="col-12">
      <div className="custom-control custom-checkbox d-block mb-2">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck2"
        />
        <label className="custom-control-label" for="customCheck2">
          Create an accout
        </label>
      </div>
      <div className="custom-control custom-checkbox d-block">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customCheck3"
        />
        <label className="custom-control-label" for="customCheck3">
          Ship to a different address
        </label>
      </div>
    </div>
  );
}

export default Checkoutopts;
