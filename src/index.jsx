import parseInput from './parse-input';
import arrayProduct from './utils/array-product';
import { loadState, saveState } from './local-storage';

const formElement = document.getElementById('config');
const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

function getInput () {
	return inputElement.value;
}

function getCombinations (values) {
	return arrayProduct(values);
}

function displayInput (input) {
	const state = parseInput(input);
	displayState(state);
}

function displayState (state) {
	const values = state.map(line => line.values);
	const labels = state.map(line => line.label);
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

function setInput (input) {
	inputElement.value = input;
	saveState(input);
	resetOutput();
}

formElement.addEventListener('submit', function (e) {
	e.preventDefault();
	resetOutput();
});

const storedInputValue = loadState();

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
