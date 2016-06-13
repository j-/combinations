import { createStore } from 'redux';
import reducer from './reducers';

export default (state) => {
	return createStore(reducer, state);
};
