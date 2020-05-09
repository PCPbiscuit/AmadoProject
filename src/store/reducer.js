import { combineReducers } from "redux";
import * as ACT from './actions';

const initialStore = {
    catalog: {},
    isLoading: {},
    cart: [],
	brands: 'All',
	colors: 'All',
    categories: 'All',
    prices: {},
    sortByValue: 'Date',
    viewNumber: 4,
    listIsOpen: false,
    sortByIsOpen: false,
    chosenImg: {},
    chosenDesc: {},
    recentProduct: '',
    sliderImg: '0',
	currentPage: 1,   
};

function rootReducer(store = initialStore, action) {
	switch (action.type) {
		case ACT.UPDATE_GOODS:
			return {
				...store,
				catalog: { ...action.payload },
            };
        case ACT.UPDATE_LOADING:
			return {
				...store,
				isLoading: {...store.isLoading, ...action.payload },
            };
        case ACT.UPDATE_CART:
			return {
				...store,
				cart: [...action.payload],
            };
        case ACT.UPDATE_BRANDS:
			return {
				...store,
				brands: action.payload ,
            };
        case ACT.UPDATE_COLORS:
			return {
				...store,
				colors: action.payload ,
            };
        case ACT.UPDATE_CATEGORY:
			return {
				...store,
				categories: action.payload ,
            };
        case ACT.UPDATE_PRICES:
			return {
				...store,
				prices: {...action.payload },
            };
        case ACT.SORT_BY_VALUE:
			return {
				...store,
				sortByValue: action.payload,
            };
        case ACT.LIST_NUMBER:
			return {
				...store,
				viewNumber: action.payload,
            };
        case ACT.SORT_BY_ISOPEN:
			return {
				...store,
				sortByIsOpen: action.payload,
            };
        case ACT.LIST_ISOPEN:
			return {
				...store,
				listIsOpen: action.payload,
            };
        case ACT.CHOSEN_IMG:
			return {
				...store,
				chosenImg: {...action.payload},
            };
        case ACT.CHOSEN_DESC:
			return {
				...store,
				chosenDesc: {...action.payload},
            };
        case ACT.RECENT_PRODUCT:
			return {
				...store,
				recentProduct: action.payload,
            };
        case ACT.SLIDER_IMAGE:
			return {
				...store,
				sliderImg: action.payload,
            };
        case ACT.CURRENT_PAGE:
			return {
				...store,
				currentPage: action.payload,
            };
        default:
            return store;
        
        }
}

export default () => combineReducers({
	app: rootReducer
});