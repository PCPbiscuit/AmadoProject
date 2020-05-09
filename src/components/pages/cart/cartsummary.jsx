import React from "react";
import { Link } from "react-router-dom";
import * as URL from "../../../router/url";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import Spinner from "../../spinner/spinner";

Cartsummary.propTypes = {
  isLoading: PropTypes.bool,
  cart: PropTypes.array,
};





function Cartsummary(props) {

  const {isLoading, cart} = props

  let sum = 0;
  for(let i=0; i<cart.length; i++ ){
    let curPrice = Number(cart[i].amount)*Number(cart[i].price);
    sum+=curPrice;
  }

  return (
    <div className="col-12 col-lg-4">
      <div className="cart-summary">
        <h5>Cart Total</h5>
        <ul className="summary-table">
          <li>
            <span>subtotal:</span> <span>${sum}</span>
          </li>
          <li>
            <span>delivery:</span> <span>Free</span>
          </li>
          <li>
            <span>total:</span> <span>${sum}</span>
          </li>
        </ul>
        <div className="cart-btn mt-100">
          <Link to="/checkout" className="btn amado-btn w-100">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    catalog: store.app.catalog.data,
    cart: store.app.cart || [],
    isLoading: store.app.isLoading.goods || false,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cartsummary);
