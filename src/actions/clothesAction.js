export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function addItemToBasket(data) {
	return {
		type: ADD_ITEM,
		item: data
	}
}

export function closeMenu() {
	return {
		type: CLOSE_MENU,
		data: false
	}
}
