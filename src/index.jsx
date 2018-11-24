import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import createStore from './create-store';
import { loadState, saveState } from './local-storage';
import { whyDidYouUpdate } from 'why-did-you-update';
import 'bootstrap/dist/css/bootstrap.css';

if (__DEV__) {
	whyDidYouUpdate(React);
}

const store = window.store = createStore(loadState());

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('app')
);

store.subscribe(() => {
	saveState(store.getState());
});
