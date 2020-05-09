import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DropDown from '../../dropDown/index'
import * as URL from '../../../router/url'
import { listNumber } from '../../../store/action_creators'
import { connect } from "react-redux";
import * as PropTypes from "prop-types";


const sortByList = ['Date', 'Newest', 'Popular'];
const viewOnPageList = [4, 8, 12, 18];

Topbar.propTypes = {
	listNumber: PropTypes.func,
}



function Topbar(props) {

	const { listNumber } = props

    const [ sortBy, setSortBy ] = useState(0);
    const [viewOnPage, setViewBy] = useState(0)
    // const viewOnPage = useSelector(state => state.app.itemsOnPage);

	// const dispatcher = useDispatch();

	


	const handleChangeDropDown = (index, name) => {
		if (name === "sortBy") {
			setSortBy(index);
		 } else if (name === "viewOnPage") {
			setViewBy(index)
			listNumber(viewOnPageList[index])
			// dispatcher({ // обновить данные в редакс - глобал сторадж
			// 	type: updateItemsOnPage.getType(),
			// 	payload: index,
			// });
		}
	};
    return (
        <div className="row">
                <div className="col-12">
                        <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                            <div className="total-products">
                                <p>Showing 1-8 0f 25</p>
                                <div className="view d-flex">
                                    <a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="product-sorting d-flex">
                                <DropDown
							        title="Sort by"
							        name="sortBy"
							        current={ sortBy }
							        options= {sortByList}
							        onChange={ handleChangeDropDown }
						        />

						        <DropDown
						        	title="View"
						        	name="viewOnPage"
						        	current= { viewOnPage }
						        	options= {viewOnPageList}
						        	onChange={ handleChangeDropDown }
						        />
                            </div>
                        </div>
                    </div>
        </div>

    )
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
		listNumber: (param) => dispatch(listNumber(param)),
	};
  };
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Topbar);
