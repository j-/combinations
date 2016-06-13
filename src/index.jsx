const EXP_LABEL = /^([^,]+)\s*:\s*/;
const EXP_DELIMITER_DIMENSIONS = /(?:\r?\n)+/g;
const EXP_DELIMITER_ITEMS = /,\s*/g;

const formElement = document.getElementById('config');
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

function filterOutEmpty (value) {
	return !!value;
}

function getInput () {
	return inputElement.value;
}

function getLinesFromInput (input) {
	return input
		.split(EXP_DELIMITER_DIMENSIONS)
		.filter(filterOutEmpty);
}

function getValuesFromLine (line) {
	return line
		.split(EXP_LABEL)
		.pop()
		.split(EXP_DELIMITER_ITEMS)
		.filter(filterOutEmpty);
}

function getLabelFromLine (line) {
	const match = line.match(EXP_LABEL);
	if (!match) {
		return null;
	}
	return match[1];
}

function getValuesFromLines (lines) {
	return lines.map(getValuesFromLine);
}

function getLabelsFromLines (lines) {
	return lines.map(getLabelFromLine);
}

function arrayConcat (a, b) {
	return a.concat(b);
}

function arrayProduct (sets) {
	return sets.reduce((left, right) => {
		return left.map((a) => {
			return right.map((b) => {
				return a.concat([b]);
			});
		}).reduce(arrayConcat);
	}, [[]]);
}

function getCombinations (values) {
	return arrayProduct(values);
}

function displayInput (input) {
	const lines = getLinesFromInput(input);
	const values = getValuesFromLines(lines);
	const labels = getLabelsFromLines(lines);
	displayValues(values, labels);
}

function displayValues (values, labels) {
	const combinations = getCombinations(values);
	displayCombinations(combinations, labels);
}

function buildCombinationTable (combinations, labels) {
	const table = document.createElement('table');
	table.classList.add('table');
	table.classList.add('table-bordered');
	table.classList.add('table-hover');
	let showHead = false;
	const head = document.createElement('thead');
	let row = document.createElement('tr');
	head.appendChild(row);
	for (let label of labels) {
		let th = document.createElement('th');
		if (label) {
			showHead = true;
			th.textContent = label;
		}
		row.appendChild(th);
	}
	if (showHead) {
		table.appendChild(head);
	}
	const body = document.createElement('tbody');
	table.appendChild(body);
	for (let combination of combinations) {
		let row = document.createElement('tr');
		for (let value of combination) {
			let cell = document.createElement('td');
			cell.textContent = value;
			row.appendChild(cell);
		}
		body.appendChild(row);
	}
	return table;
}

function displayCombinations (combinations, labels) {
	emptyOutput();
	const table = buildCombinationTable(combinations, labels);
	outputElement.appendChild(table);
}

function empty (element) {
	let child;
	while (child = element.firstChild) {
		element.removeChild(child);
	}
}

function emptyOutput () {
	empty(outputElement);
}

function resetOutput () {
	const input = getInput();
	displayInput(input);
}

function saveInput (input) {
	localStorage.setItem(LOCAL_STORAGE_KEY, input);
}

function setInput (input) {
	inputElement.value = input;
	saveInput(input);
	resetOutput();
}

formElement.addEventListener('submit', function (e) {
	e.preventDefault();
	resetOutput();
});

const LOCAL_STORAGE_KEY = 'combinations-input';
const storedInputValue = localStorage.getItem(LOCAL_STORAGE_KEY);

if (storedInputValue) {
	setInput(storedInputValue);
}

inputElement.addEventListener('input', function () {
	saveInput(inputElement.value);
});

document.getElementById('load-example-1').addEventListener('click', function (e) {
	e.preventDefault();
	setInput('A, B, C\nD, E\nF, G, H');
});

document.getElementById('load-example-2').addEventListener('click', function (e) {
	e.preventDefault();
	setInput('Number value: negative, zero, positive\nTextarea value: empty string, "foobar"\nCheckbox: checked, unchecked\nSubmit button: clicked');
});
