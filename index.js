import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store.js';

import AppHeader from './components/header.js';
import AppCounter from './components/counter.js';

class App extends Component {

	render() {
		return(
			<div className="container">
				<AppHeader />
				<AppCounter />
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('app'));
