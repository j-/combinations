import React, { PropTypes } from 'react';
import ExampleButton from '../example-button';

const EXAMPLE_SIMPLE = `

A, B, C
D, E
F, G, H

`.trim();

const EXAMPLE_COMPLEX = `

Number value: negative, zero, positive
Textarea value: empty string, "foobar"
Checkbox: checked, unchecked
Submit button: clicked

`.trim();

const ExampleButtons = ({ loadExample }) => (
	<div>
		<ExampleButton exampleInput={ EXAMPLE_SIMPLE }>
			Simple example
		</ExampleButton>
		<ExampleButton exampleInput={ EXAMPLE_COMPLEX }>
			Example testing scenarios
		</ExampleButton>
	</div>
);

export default ExampleButtons;
