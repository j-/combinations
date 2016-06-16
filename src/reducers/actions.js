import {
	UPDATE_INPUT,
	GET_COMBINATIONS,
	LOAD_EXAMPLE,
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
