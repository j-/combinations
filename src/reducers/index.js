/*

State shape:

{
	input      <-- user input
	lines[]    <-- array of line data
		label  <-- optional label for this line
		values <-- all items in this set
}

*/

import {
	UPDATE_INPUT,
	GET_COMBINATIONS,
	LOAD_EXAMPLE,
} from './types';

import parseInput from '../parse-input';

export default (state = {}, action) => {
	switch (action.type) {
		case UPDATE_INPUT:
			return {
				...state,
				input: action.input,
			};
		case GET_COMBINATIONS:
			return {
				...state,
				lines: parseInput(state.input),
			};
		case LOAD_EXAMPLE:
			return {
				...state,
				input: action.input,
				lines: parseInput(action.input),
			};
		default:
			return state;
	}
};
