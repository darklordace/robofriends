import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { requestRobots, searchRobots } from './reducers';

import './index.css';

const logger = createLogger()

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
