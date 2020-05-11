import React from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import * as URL from '../../../router/url'
import { updateCategory, updateBrands, updateColors, currentPageUpdate } from '../../../store/action_creators'


Sidecategory.propTypes = {
    updateCategory: PropTypes.func,
    updateBrands: PropTypes.func,
    updateColors: PropTypes.func,
    currentPageUpdate: PropTypes.func,
    categories: PropTypes.string,
  };

// Tables
// Chairs
// Seats
// Couches
// Lamps

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



function Sidecategory(props) {
    const {
        categories,
        updateCategory,
        updateBrands,
        updateColors,
        currentPageUpdate
    } = props

    function renderClickCategories(e){
        
        updateCategory(e.currentTarget.getAttribute('name'))
        currentPageUpdate(1)

    }

    function renderCategories() {
        return categoriesList.map((product) => {
          return (
            <ul key={product.id}>
              <li className={categories == product.id ? 'active' : ''} name={product.id} htmlFor={product.id} onClick={renderClickCategories}>
                <Link to={`${URL.SHOP}`}>{product.name}</Link>
              </li>
            </ul>
          );
        });
      }

      function resetFilters(){
        updateCategory('All');
        updateColors('All');
        currentPageUpdate(1)

      }

  return (
    <div className="widget catagory mb-50">
      <h6 className="widget-title mb-30" style={{cursor: 'pointer', border: '2px solid #fbb710', textAlign: 'center', padding: '5px'}} onClick={resetFilters}>Reset categories</h6>
      <h6 className="widget-title mb-30">Categories</h6>
      <div className="catagories-menu">
          
      {renderCategories()}
      </div>
    </div>
  );
}

const mapStateToProps = (store) => {
    return {
      catalog: store.app.catalog.data,
      cart: store.app.cart,
      isLoading: store.app.isLoading.goods || false,
      categories: store.app.categories,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      updateCategory: (e) => dispatch(updateCategory(e)),
      updateColors: (e) => dispatch(updateColors(e)),
      updateBrands: (e) => dispatch(updateBrands(e)),
      currentPageUpdate: (e) => dispatch(currentPageUpdate(e)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Sidecategory);
  
