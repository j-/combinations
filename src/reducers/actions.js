import {
	UPDATE_INPUT,
	GET_COMBINATIONS,
	LOAD_EXAMPLE,
} from './types';

export const updateInput = (input) => ({
	type: UPDATE_INPUT,
	input,
});

export const getCombinations = () => ({
	type: GET_COMBINATIONS,
});

export const loadExample = (input) => ({
	type: LOAD_EXAMPLE,
	input,
});
