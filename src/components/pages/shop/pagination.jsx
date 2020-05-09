import React from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import { currentPageUpdate } from "../../../store/action_creators";
import Spinner from "../../spinner/spinner";

Pagination.propTypes = {
  catalog: PropTypes.array,
  isLoading: PropTypes.bool,
  categories: PropTypes.string,
  brands: PropTypes.string,
  colors: PropTypes.string,
  currentPage: PropTypes.number,
  viewNumber: PropTypes.number,
  currentPageUpdate: PropTypes.func,
};

function Pagination(props) {
  const {
    catalog,
    isLoading,
    categories,
    brands,
    colors,
    currentPage,
    viewNumber,
    currentPageUpdate,
  } = props;

  if (isLoading) {
    return <Spinner />;
  }
  let allProductAmount = 0;
  let allPageAmount = [];
  let pageAmount;

  for (let i = 0; i < catalog.length; i++) {
    if (catalog[i].brand === brands || brands === "All") {
      if (catalog[i].category === categories || categories === "All") {
        if (catalog[i].colors === colors || colors === "All") {
          allProductAmount++;
        }
      }
    }
    pageAmount = Math.ceil(allProductAmount / viewNumber);
  }
  for (let j = 1; j <= pageAmount; j++) {
    
    allPageAmount.push(j);
    // console.log("pageRender", allPageAmount);
  }
  function pageRender() {
    return allPageAmount.map((product, index)=> {
        // console.log('CURRENT PAGE =', currentPage, 'PRODUCT=', product)
      return (
        <li className={product === currentPage ? 'page-item active' : 'page-item'}
        key={product}
        >
          <div className="page-link" onClick={()=>currentPageUpdate(product)}>
            {product}
          </div>
        </li>
      ); 
    })
  }

  return (
    <div className="row">
      <div className="col-12">
        <nav aria-label="navigation">
          <ul className="pagination justify-content-end mt-50">
            {pageRender()}
          </ul>
        </nav>
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    catalog: store.app.catalog.data,
    categories: store.app.categories,
    brands: store.app.brands,
    colors: store.app.colors,
    isLoading: store.app.isLoading.goods || false,
    recentProduct: store.app.recentProduct,
    sliderImg: store.app.sliderImg,
    viewNumber: store.app.viewNumber,
    currentPage: store.app.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // listNumber: (param) => dispatch(listNumber(param)),
    currentPageUpdate: (param) => dispatch(currentPageUpdate(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
