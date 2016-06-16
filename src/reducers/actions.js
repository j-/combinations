import {
	UPDATE_INPUT,
	GET_COMBINATIONS,
	LOAD_EXAMPLE,
	CLEAR,
} from './types';

export const updateInput = (input) => ({
	type: UPDATE_INPUT,
	input,
});

export const getCombinations = (input) => ({
	type: GET_COMBINATIONS,
	input,
});

export const loadExample = (input) => ({
	type: LOAD_EXAMPLE,
	input,
});

export const clear = () => ({
	type: CLEAR,
});
