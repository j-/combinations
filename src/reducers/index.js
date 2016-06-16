import { combineReducers } from 'redux';

import input, { getInput as getInputFromState } from './input';
import lines, { getLines as getLinesFromState } from './lines';

export default combineReducers({
	input,
	lines,
});

export const getInput = (state) => (
	getInputFromState(state.input)
);

export const getLines = (state) => (
	getLinesFromState(state.lines)
);
