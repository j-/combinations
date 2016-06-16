import React from 'react';

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

export default ({ loadExample }) => (
	<div>
		<button type="button" className="btn btn-link" onClick={ () => loadExample(EXAMPLE_SIMPLE) }>Simple example</button>
		<button type="button" className="btn btn-link" onClick={ () => loadExample(EXAMPLE_COMPLEX) }>Example testing scenarios</button>
	</div>
);
