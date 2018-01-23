import {
  ADD_ITEM,
} from '../actions/basketAction';

const initialState = {
	numberOfItems: 0
};

export default function (state = initialState, action, data = {}) {

	switch (action.type) {
		case ADD_ITEM:
			return {
				...state
				, loggedIn: 1
				, shouldRedirect: 1
			};

	}

	return state
}
