export const ADD_TO_BASKET = 'ADD_TO_BASKET';

export function addItem() {
	return {
		type: ADD_TO_BASKET,
		numberOfItems: 1
	}
}
