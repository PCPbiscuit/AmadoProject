import React from "react";
import paypalImg from "../../../img/core-img/paypal.png";

function Paypalmethod() {
  return (
    <div className="custom-control custom-checkbox mr-sm-2">
      <input type="checkbox" className="custom-control-input" id="paypal" />
      <label className="custom-control-label" for="paypal">
        Paypal <img className="ml-15" src={paypalImg} alt="" />
      </label>
    </div>
  );
}

export default Paypalmethod;
