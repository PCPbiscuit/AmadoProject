import React from "react";

function Cashmethod() {
  return (
    <div className="custom-control custom-checkbox mr-sm-2">
      <input
        type="checkbox"
        className="custom-control-input"
        id="cod"
      />
      <label className="custom-control-label" for="cod">
        Cash on Delivery
      </label>
    </div>
  );
}

export default Cashmethod;
