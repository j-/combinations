export const EXP_DELIMITER_DIMENSIONS = /(?:\r?\n)+/g;

export const getLinesFromInput = (input) => {
	return input
		.split(EXP_DELIMITER_DIMENSIONS)
		.filter(Boolean);
};

export const EXP_LABEL = /^([^,:]+?)\s*:\s*/;

export const getLabelFromLine = (line) => {
	const match = line.match(EXP_LABEL);
	if (!match) {
		return null;
	}
	return match[1];
};

export const EXP_DELIMITER_ITEMS = /,\s*/g;

export const getValuesFromLine = (line) => {
	return line
		.split(EXP_LABEL)
		.pop()
		.split(EXP_DELIMITER_ITEMS)
		.filter(Boolean);
};

const parseInput = (input) => {
	return getLinesFromInput(input).map(line => ({
		label: getLabelFromLine(line),
		values: getValuesFromLine(line),
	}));
};

export default parseInput;
