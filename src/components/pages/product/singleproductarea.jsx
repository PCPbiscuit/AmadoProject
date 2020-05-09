import React from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import Spinner from "../../spinner/spinner";
import { Link } from "react-router-dom";
import * as URL from "../../../router/url.js";
import {
  loadCatalog,
  loadChosen,
  updateCart,
  mostRecentProd,
  sliderImageCount,
  updateCategory,
} from "../../../store/action_creators";
import { withRouter } from "react-router";
import bigImg1 from "../../../img/product-img/pro-big-1.jpg";
import bigImg2 from "../../../img/product-img/pro-big-2.jpg";
import bigImg3 from "../../../img/product-img/pro-big-3.jpg";
import bigImg4 from "../../../img/product-img/pro-big-4.jpg";

Singleproductarea.propTypes = {
  catalog: PropTypes.array,
  isLoading: PropTypes.bool,
  openChosenDesc: PropTypes.bool,
  openChosenImg: PropTypes.bool,
  chosenImg: PropTypes.array,
  chosenDesc: PropTypes.array,
  sliderImg: PropTypes.string,
  recentProduct: PropTypes.string,
  cart: PropTypes.array,
  updateCart: PropTypes.func,
  sliderImageCount: PropTypes.func,
  loadChosen: PropTypes.func,
  mostRecentProd: PropTypes.func,
  updateCategory: PropTypes.func,
};

function Singleproductarea(props) {
  const {
    catalog,
    isLoading,
    chosenImg,
    chosenDesc,
    sliderImg,
    cart,
    updateCart,
    sliderImageCount,
    loadChosen,
    match,
    recentProduct,
    mostRecentProd,
    openChosenDesc,
    openChosenImg,
    updateCategory,
  } = props;
  if (openChosenDesc || openChosenImg) {
    return <Spinner />;
  }
  let categoriesList = [
    {
      id: 1,
      name: "Tables",
    },
    {
      id: 2,
      name: "Chairs",
    },
    {
      id: 3,
      name: "Seats",
    },
    {
      id: 4,
      name: "Couches",
    },
    {
      id: 5,
      name: "Lamps",
    },
  ];


  let code = match.params.code;
  function renderSingleImage() {
    return chosenImg.map((product, index) => {
      if (index === Number(sliderImg)) {
        return (
          <div className="carousel-item active" key={index}>
            <img
              className="d-block w-100"
              src={`http://test-api.ipromote.ru/img/${product.url}`}
              alt="Third slide"
            />
          </div>
        );
      }
    });
  }

  let title;
  let price;
  let category;
  
  prodMeta();
  function prodMeta() {
    return catalog.map((product) => {
      if (code == product.id) {
        title = product.title;
        price = product.price;
        category = product.category
      }
    });
  }
  let categoryName = categoriesList[Number(category) -1 ].name

  function addToCart(e) {
    // console.log('CARTHANDLER === ',e.currentTarget.getAttribute('name'))
    if (
      !cart.find((elem) => elem.id === e.currentTarget.getAttribute("name"))
    ) {
      let id = e.currentTarget.getAttribute("name");
    //   let image = e.currentTarget.getAttribute("imagesrc");
      cart.push({
        id: id,
        price: price,
        amount: 1,
        image: chosenImg[0].url,
        title: title,
      });
      updateCart(cart);
      localStorage.setItem("local", JSON.stringify(cart));
    // console.log(cart, '==CART==')
    } else {
      console.log("ТАКОЙ ТОВАР СУЩЕСТВУЕТ");
    }
  }

  function renderCarouselImage() {
      if(chosenImg){
    return chosenImg.map((product, index) => {
      return (
        <li
          className={index === Number(sliderImg) ? "active" : ""}
          data-target="#product_details_slider"
          data-slide-to="0"
          onClick={() => sliderImageCount(index)}
          key={index}
        >
          <img
            className="d-block"
            src={`http://test-api.ipromote.ru/img/${product.url}`}
            alt=""
            style={{ height: "100%", margin: "auto" }}
          />
        </li>
      );
    });
  }}
  

  function renderReview() {
    console.log(chosenDesc, "==CHOSENDESC");
    if (chosenDesc) {
      return chosenDesc.map((product, index) => {
        return (
          <div className="short_overview my-5" key= {index}>
            <p>{product.title}</p>
            <h6>{product.user}</h6>
            
          </div>
        );
      });
    }
    //
  }

  if (recentProduct !== code) {
    loadChosen(code);
    mostRecentProd(code);
  }
  if (!chosenImg && !chosenDesc) {
    return <>такого товара не существует</>;
  } else {
    return (
      <div className="single-product-area section-padding-100 clearfix">
        <div className="container-fluid">
          {/* breadcrumbs */}

          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-50">
                  <li className="breadcrumb-item">
                    <Link to= {`${URL.HOME}`}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={`${URL.SHOP}`} >Furniture</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={`${URL.SHOP}`} onClick={()=>updateCategory(category)}>{categoryName}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* //singleproduct */}
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="single_product_thumb">
                <div
                  id="product_details_slider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    {renderCarouselImage()}
                  </ol>

                  <div className="carousel-inner">{renderSingleImage()}</div>
                </div>
              </div>
            </div>

            {/* productdesc */}
            <div className="col-12 col-lg-5">
              <div className="single_product_desc">
                <div className="product-meta-data">
                  <div className="line"></div>
                  <p className="product-price">${price}</p>
                  <a href="product-details.html">
                    <h6>{title}</h6>
                  </a>
                  <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="review">
                      <a href="#">Write A Review</a>
                    </div>
                  </div>
                  <p className="avaibility">
                    <i className="fa fa-circle"></i> In Stock
                  </p>
                </div>
                {renderReview()}

                {/* addtocart */}

                  <button
                    type="submit"
                    value="5"
                    name={code}
                    onClick={addToCart}
                    className="btn amado-btn"
                  >
                    Add to cart
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    catalog: store.app.catalog.data,
    cart: store.app.cart,
    isLoading: store.app.isLoading.goods || false,
    openChosenDesc: store.app.isLoading.goods || false,
    openChosenImg: store.app.isLoading.goods || false,
    chosenImg: store.app.chosenImg.data,
    chosenDesc: store.app.chosenDesc.data,
    recentProduct: store.app.recentProduct,
    sliderImg: store.app.sliderImg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCatalog: () => dispatch(loadCatalog()),
    updateCart: (param) => dispatch(updateCart(param)),
    updateCategory: (param) => dispatch(updateCategory(param)),
    loadChosen: (param) => dispatch(loadChosen(param)),
    mostRecentProd: (param) => dispatch(mostRecentProd(param)),
    sliderImageCount: (param) => dispatch(sliderImageCount(param)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Singleproductarea));
