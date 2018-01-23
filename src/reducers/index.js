/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'


//# Reducers
    import basketReducer from './basketReducer';
    import clothesAPI from './clothesAPI';

const reducers = combineReducers({
  router: routerReducer,
	basketReducer,
	clothesAPI,
});

export default reducers;
