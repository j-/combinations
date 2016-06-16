import {
	UPDATE_INPUT,
	LOAD_EXAMPLE,
	CLEAR,
} from '../types';

export default (state = '', action) => {
	switch (action.type) {
		case UPDATE_INPUT:
		case LOAD_EXAMPLE:
			return action.input;
		case CLEAR:
			return '';
		default:
			return state;
	}
};

export const getInput = (state) => (
	state
);
