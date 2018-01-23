import {
	ADD_ITEM,
	REMOVE_ITEM,
} from '../actions/clothesAction';

const initialState = {};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state
				, [action.item]: state[[action.item]] ? state[[action.item]]+1 : 1
			};
			case REMOVE_ITEM:
			return {
				...state
				, clothesAPI: action.data
				, inApiCall: false
				, apiCall: true
			};
		default:
			return state;
	}

	return state
}
