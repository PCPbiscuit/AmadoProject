import React from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import Spinner from "../../spinner/spinner";
import { loadCatalog, updateCart } from "../../../store/action_creators";
import { Link } from "react-router-dom";
import * as URL from "../../../router/url";
import cartImg1 from "../../../img/bg-img/cart1.jpg";

Carttable.propTypes = {
  cart: PropTypes.array,
  catalog: PropTypes.array,
  isLoading: PropTypes.bool,
  loadCatalog: PropTypes.func,
  updateCart: PropTypes.func,
};

function Carttable(props) {
  const { cart, catalog, isLoading, loadCatalog, updateCart } = props;
  // console.log("CART PROPS", props);
  return cart.map((product, index) => {
    let qty = product.amount;
    function amountHandler(e, id) {
      if (e.currentTarget.getAttribute("name") === "minus") {
        if (cart[e.currentTarget.getAttribute("surname")].amount == 1) {
          cart.splice(e.currentTarget.getAttribute("surname"), 1);
        } else {
          cart[e.currentTarget.getAttribute("surname")].amount--;
        }
      } else {
        cart[e.currentTarget.getAttribute("surname")].amount++;
      }
      updateCart(cart);
      localStorage.setItem("local", JSON.stringify(cart));
      
    }
    return (
      <tr key= {index}>
        <td className="cart_product_img">
        <Link to={`${URL.PRODUCT}/${product.id}`}>
            <img
              src={`http://test-api.ipromote.ru/img/${product.image}`}
              alt="Product"
            />
          </Link>
        </td>
        <td className="cart_product_desc">
          <h5>{product.title}</h5>
        </td>
        <td className="price">
          <span>${product.price}</span>
        </td>
        <td className="qty">
          <div className="qty-btn d-flex">
            {/* <p>{qty}</p> */}
            <div className="quantity">
              <span
                className="qty-minus"
                onClick={amountHandler}
                name="minus"
                surname={index}
              >
                <i className="fa fa-minus" aria-hidden="true"></i>
              </span>
              <input
                type="number"
                className="qty-text"
                id="qty"
                step="1"
                min="1"
                max="300"
                name="quantity"
                value={qty}
                readOnly={true}
              />
              <span
                className="qty-plus"
                onClick={amountHandler}
                name="plus"
                surname={index}
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </td>
      </tr>
    );
  });
}

const mapStateToProps = (store) => {
  return {
    catalog: store.app.catalog.data,
    isLoading: store.app.isLoading.goods || false,
    cart: store.app.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCatalog: () => dispatch(loadCatalog()),
    updateCart: (param) => dispatch(updateCart(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carttable);
