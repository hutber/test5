// There are three possible states for our login
// process and we need actions for each of them
export const ADD_ITEM = 'ADD_ITEM'

export function addItem(numberOfItems) {
	return {
		type: ADD_ITEM,
		numberOfItems: numberOfItems+1
	}
}
