import React from 'react';
import { connect } from "react-redux";
import * as PropTypes from 'prop-types';
import Spinner from '../spinner/spinner'
import  {Link } from "react-router-dom";
import * as URL from '../../router/url'
import { loadCatalog } from '../../store/action_creators'

FirstProduct.propTypes = {
	catalog: PropTypes.array,
	isLoading: PropTypes.bool,
};

function FirstProduct(props) {
    const {
		catalog,
		isLoading,
	} = props;
    console.log('catalog = ', catalog)
	if (isLoading) {
		return <Spinner />
	};

    return (
        catalog.slice(0, 9).map((product) => {
            return(
                <div className="single-products-catagory clearfix"  key={product.id}>
        <Link to= {`${URL.PRODUCT}/${ product.id }`} >
            <img src={`http://test-api.ipromote.ru/img/${product.img_url}`} alt="" style= {{marginTop: '40%'}}/>  
            <div className="hover-content" style={{marginTop: '-5%', width: '75%', textAlign: '-webkit-center'}}>
                <div className="line"></div>
                <p>From ${product.price}</p>
                <h4>{product.title}</h4>
            </div>
        </Link>
                </div>
            )
        })
        
    )
}

const mapStateToProps = (store) => {
	return {
		catalog: store.app.catalog.data,
		isLoading: store.app.isLoading.goods || false,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadCatalog: () => dispatch(loadCatalog()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstProduct);

// style={{position: 'absolute', left: '0%', top: '0'}}
