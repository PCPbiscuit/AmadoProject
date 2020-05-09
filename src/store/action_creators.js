import * as ACT from './actions'

export function updateCategory(payload) {
    return {
        type: ACT.UPDATE_CATEGORY,
        payload,
    }
}

export function updateCatalog(payload) {
    return {
        type: ACT.UPDATE_GOODS,
        payload,
    }
}
export function updateLoading(payload) {
    return {
        type: ACT.UPDATE_LOADING,
        payload,
    }
}
export function updateCart(payload) {
    console.log(payload)
    return {
        type: ACT.UPDATE_CART,
        payload,
        
    }
}
export function updateBrands(payload) {
    return {
        type: ACT.UPDATE_BRANDS,
        payload,
    }
}
export function updateColors(payload) {
    return {
        type: ACT.UPDATE_COLORS,
        payload,
    }
}
export function updatePrices(payload) {
    return {
        type: ACT.UPDATE_PRICES,
        payload,
    }
}
export function sortByValue(payload) {
    return {
        type: ACT.SORT_BY_VALUE,
        payload,
    }
}
export function sortByIsOpen(payload) {
    return {
        type: ACT.SORT_BY_ISOPEN,
        payload,
    }
}
export function listNumber(payload) {
    return {
        type: ACT.LIST_NUMBER,
        payload,
    }
}
function listIsOpen(payload) {
    return {
        type: ACT.LIST_ISOPEN,
        payload,
    }
}
export function openChosenImg(payload) {
    return {
        type: ACT.CHOSEN_IMG,
        payload,
    }
}
export function openChosenDesc(payload) {
    return {
        type: ACT.CHOSEN_DESC,
        payload,
    }
}
export function sliderImageCount(payload) {
    return {
        type: ACT.SLIDER_IMAGE,
        payload,
    }
}
export function mostRecentProd(payload) {
    return {
        type: ACT.RECENT_PRODUCT,
        payload,
    }
}
export function currentPageUpdate(payload) {
    return {
        type: ACT.CURRENT_PAGE,
        payload,
    }
}






export const loadCatalog = (link) =>  {

	return dispatch => {

		dispatch(updateLoading({ goods: true })); // породили action в сторону ридакса, под названием "поставь флаг загрузки товаров в тру"

		const data = fetch(link);

		data.
		then((data) => { // async (data) => { ...
			return data.json();
		}).then( (data) => {

			dispatch(updateCatalog(data)); // экшн - обновить данные в каталоге (в ридаксе)
			dispatch(updateLoading({ goods: false })); // экшен - обновить флажок загрузки, сказать что = фолз, типа загрузка завеpшена

		}).
		catch((e) => {
			dispatch(updateLoading({ goods: false }));
			console.log("ERROR while loading data from url", e);
		});

	}
};

export const loadChosen = (id) => {

	return dispatch =>{

		let chosenProps = [
			{
				url: `http://test-api.ipromote.ru/API/IMAGE/FIND?cid=${ id }`,
				actions: openChosenImg,
				title: 'openChosenImg'
			},
			{
				url: `http://test-api.ipromote.ru/API/REVIEW/FIND?cid=${ id }`,
				actions: openChosenDesc,
				title: 'openChosenDesc'
			},
        ]
        
        for(let i = 0; i<2; i++){
            dispatch(updateLoading({ [chosenProps[i].title]: true })); // породили action в сторону ридакса, под названием "поставь флаг загрузки товаров в тру"

		const data = fetch(chosenProps[i].url);
            console.log(data, '==DATA')
		data.
		then((data) => { // async (data) => { ...
			return data.json();
		}).then( (data) => {

			dispatch(chosenProps[i].actions(data)); // экшн - обновить данные в каталоге (в ридаксе)
			dispatch(updateLoading({ [chosenProps[i].title]: false })); // экшен - обновить флажок загрузки, сказать что = фолз, типа загрузка завеpшена

		}).
		catch((e) => {
			dispatch(updateLoading({ [chosenProps[i].title]: false }));
			console.log("ERROR while loading data from url", e);
		});
        }

        




	}

}
// export const loadFilters = (action) => {

// 	return dispatch =>{

// 		let filterProps = [
// 			{

// 			}
// 		]
// 	}
// }