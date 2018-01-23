import {
  ADD_TO_BASKET,
} from '../actions/basketAction';

const initialState = {
	numberOfItems: 0
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TO_BASKET:
			return {
				...state
				, numberOfItems: state.numberOfItems+1
			};

	}

	return state
}
