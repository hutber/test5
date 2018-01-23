import {
  START_CALL,
  FINISHED_CALL,
} from '../actions/clothesAPI';

const initialState = {
	inApiCall: false,
	apiCall: false,
	clothes: []
};

export default function (state = initialState, action) {

	switch (action.type) {
		case START_CALL:
			return {
				...state
				, inApiCall: true
			};
			case FINISHED_CALL:
			return {
				...state
				, clothes: action.data
				, inApiCall: false
				, apiCall: true
			};
		default:
			return state;
	}

	return state
}
