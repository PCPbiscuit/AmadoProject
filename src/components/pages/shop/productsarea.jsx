import React from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import Spinner from "../../spinner/spinner";
import { Link } from "react-router-dom";
import * as URL from "../../../router/url";
import { loadCatalog, updateCart } from "../../../store/action_creators";
import cartImg from "../../../img/core-img/cart.png";

Productsarea.propTypes = {
  catalog: PropTypes.array,
  isLoading: PropTypes.bool,
  cart: PropTypes.array,
  updateCart: PropTypes.func,
  categories: PropTypes.string,
  brands: PropTypes.string,
  colors: PropTypes.string,
  currentPage: PropTypes.number,
  viewNumber: PropTypes.number,
};

function Productsarea(props) {
  const {
    catalog,
    isLoading,
    cart,
    updateCart,
    categories,
    brands,
    colors,
    currentPage,
    viewNumber,
  } = props;

  function cartHandler(e) {
    // console.log('CARTHANDLER === ',e.currentTarget.getAttribute('name'))
    if (
      !cart.find((elem) => elem.id === e.currentTarget.getAttribute("name"))
    ) {
      let id = e.currentTarget.getAttribute("name");
      let price = e.currentTarget.getAttribute("price");
      let image = e.currentTarget.getAttribute("imagesrc");
      let title = e.currentTarget.getAttribute("alt");
      cart.push({
        id: id,
        price: price,
        amount: 1,
        image: image,
        title: title,
      });
      updateCart(cart);
      localStorage.setItem("local", JSON.stringify(cart));
    } else {
      console.log("ТАКОЙ ТОВАР СУЩЕСТВУЕТ");
    }
  }
  if (isLoading) {
    return <Spinner />;
  }

  let start = 0; // начало каталога
  let startItem = ((currentPage - 1) * viewNumber )+ 1; // товар с которого начинается рендер на странице
  let endItem = startItem + viewNumber; // товар на котором рендер оканчивается на странице

  return catalog.map((product, index) => {
    if (product.brand === brands || brands === "All") {
      if (product.category === categories || categories === "All") {
        if (product.colors === colors || colors === "All") {

            start++ 
            if (startItem < endItem && start >= startItem) {
              startItem++;
              return (
                <div
                  key={product.id}
                  className="col-12 col-sm-6 col-md-12 col-xl-6"
                >
                  <div className="single-product-wrapper">
                    <div className="product-img">
                      <Link to={`${URL.PRODUCT}/${product.id}`}>
                        <img
                          src={`http://test-api.ipromote.ru/img/${product.img_url}`}
                          alt=""
                        />
                        <img
                          className="hover-img"
                          //   src={`http://test-api.ipromote.ru/img/${nextImg}`}
                          alt=""
                        />
                      </Link>
                    </div>

                    <div className="product-description d-flex align-items-center justify-content-between">
                      <div className="product-meta-data">
                        <div className="line" />
                        <p className="product-price">${product.price}</p>
                        <Link to={`${URL.PRODUCT}/${product.id}`}>
                          <h6>{product.title}</h6>
                        </Link>
                      </div>
                      <div className="ratings-cart text-right">
                        <div className="ratings">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div className="cart">
                          {/* <a
                      href="cart.html"
                      data-toggle="tooltip"
                      data-placement="left"
                      title=""
                      data-original-title="Add to Cart"
                    ></a> */}
                          <img
                            src={cartImg}
                            alt={product.title}
                            onClick={cartHandler}
                            name={product.id}
                            price={product.price}
                            imagesrc={product.img_url}
                            style={{ cursor: "pointer" }}
                            // title = {product.title}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
        }
      }
    }
  });
}

const mapStateToProps = (store) => {
  return {
    catalog: store.app.catalog.data,
    cart: store.app.cart,
    brands: store.app.brands,
    currentPage: store.app.currentPage,
    colors: store.app.colors,
    categories: store.app.categories,
    viewNumber: store.app.viewNumber,
    isLoading: store.app.isLoading.goods || false,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCatalog: () => dispatch(loadCatalog()),
    updateCart: (id) => dispatch(updateCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Productsarea);
