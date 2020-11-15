//Core
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from './components/App';
//Redux
import { Provider } from 'react-redux';
import store from 'redux/store';
//Firebase
import './firebase';
//Styles
import GlobalStyles from './index.styles';

ReactDOM.render(
	<Provider store={store}>
		<App />

		<GlobalStyles />
	</Provider>,
	document.getElementById('root'),
);
