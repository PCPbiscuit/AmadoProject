import React from "react";
import cartImg from "../../img/core-img/cart.png";
import favouritesImg from "../../img/core-img/favorites.png";
import searchImg from "../../img/core-img/search.png";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import * as URL from "../../router/url";
import { Link } from "react-router-dom";

Cartfavsearch.propTypes = {
  cart: PropTypes.array,
};

function Cartfavsearch(props) {
  const { cart } = props;
  let counter;

  for (let i = 0; i < cart.length; i++) {
    counter = cart.length;
    console.log(cart, 'CARTBITCH')
  }
  return (
    <div className="cart-fav-search mb-100">
      <Link to={`${URL.CART}`} className="cart-nav">
        <img src={cartImg} alt="" /> Cart <span>({counter})</span>
      </Link>
      <a href="#" className="fav-nav">
        <img src={favouritesImg} alt="" /> Favourite
      </a>
      <a href="#" className="search-nav">
        <img src={searchImg} alt="" /> Search
      </a>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    catalog: store.app.catalog.data,
    cart: store.app.cart,
  };
};

export default connect(mapStateToProps)(Cartfavsearch);
