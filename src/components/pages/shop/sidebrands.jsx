import React from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { updateBrands } from "../../../store/action_creators";

Sidebrands.propTypes = {
  updateBrands: PropTypes.func,
  brands: PropTypes.string,
};

let brandsList = [
  {
    id: 1,
    name: "Porto",
  },
  {
    id: 2,
    name: "Boco-Boco",
  },
  {
    id: 3,
    name: "Floran",
  },
  {
    id: 4,
    name: "Pagany",
  },
  {
    id: 5,
    name: "Ducu",
  },
  {
    id: 6,
    name: "Gramm",
  },
  {
    id: 7,
    name: "Rubiny",
  },
  {
    id: 8,
    name: "Tamana",
  },
];

function Sidebrands(props) {
  const { brands, updateBrands } = props;

  function renderBrandsClick(e) {
    // console.log("CLICK HAPPENED", e.target.getAttribute("itemid"));
    updateBrands(e.currentTarget.getAttribute("surname"));
  }

  function renderBrands() {
    return brandsList.map((product) => {
      return (
        <div
          className="form-check"
          key={product.id}
          //   id={product.id}
        >
          <input
            className="form-check-input"
            type="radio"
            name="radiobutton"
            id={product.name}
            surname={product.id}
            onChange={renderBrandsClick}
            defaultChecked={false}
          />
          <label
            className={
              brands === product.id
                ? "form-check-label select"
                : "form-check-label"
            }
            htmlFor={product.name}
          >
            {product.name}
          </label>
        </div>
      );
    });
  }

  return (
    <div className="widget brands mb-50">
      <h6 className="widget-title mb-30">Brands</h6>
      <div className="widget-desc">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radiobutton"
            id='All'
            surname='All'
            onChange={renderBrandsClick}
            defaultChecked={true}
          />
          <label
            className={
              brands === 'All'
                ? "form-check-label select"
                : "form-check-label"
            }
            htmlFor='All'
          >
            All
          </label>
        </div>
        {renderBrands()}
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    catalog: store.app.catalog.data,
    cart: store.app.cart,
    isLoading: store.app.isLoading.goods || false,
    brands: store.app.brands,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBrands: (e) => dispatch(updateBrands(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebrands);
