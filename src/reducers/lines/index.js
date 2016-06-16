import {
	GET_COMBINATIONS,
	LOAD_EXAMPLE,
} from '../types';

import parseInput from '../../parse-input';

export default (state = [], action) => {
	switch (action.type) {
		case GET_COMBINATIONS:
		case LOAD_EXAMPLE:
			return parseInput(action.input);
		default:
			return state;
	}
};

export const getLines = (state) => (
	state
);
