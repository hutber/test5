/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'


//# Reducers
	//menu
		import menuReducer from './menuReducer'
	//Basket
		import basketReducer from './basketReducer';
	//Clothes
    import clothesReducer from './clothesReducer';
    import clothesAPI from './clothesAPI';

const reducers = combineReducers({
  router: routerReducer,
	basketReducer,
	clothesAPI: clothesAPI,
	clothes: clothesReducer,
	menu: menuReducer
});

export default reducers;
