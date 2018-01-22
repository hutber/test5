import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory' //history api
const history = createHistory(); //Use a history moudle
import configureStore from './configureStore';
import Routes from './routes';
import './components/shared/main.css';

const store = configureStore(history);

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes/>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
);
