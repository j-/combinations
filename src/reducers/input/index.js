import {
	UPDATE_INPUT,
	LOAD_EXAMPLE,
} from '../types';

export default (state = '', action) => {
	switch (action.type) {
		case UPDATE_INPUT:
		case LOAD_EXAMPLE:
			return action.input;
		default:
			return state;
	}
};

export const getInput = (state) => (
	state
);
