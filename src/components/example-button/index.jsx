import React, { PropTypes } from 'react';

const ExampleButton = ({ loadExample, exampleInput, children }) => (
	<button type="button" className="btn btn-link" onClick={ () => loadExample(exampleInput) }>
		{ children }
	</button>
);

ExampleButton.propTypes = {
	loadExample: PropTypes.func.isRequired,
	exampleInput: PropTypes.string.isRequired,
};

export default ExampleButton;
