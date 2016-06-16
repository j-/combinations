import React from 'react';
import Output from '../output';

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

export default ({ input, lines, updateInput, getCombinations, loadExample }) => (
	<div className="container">

		<div className="page-header">
			<h1 className="title">Combinations</h1>
		</div>

		<form className="panel panel-body panel-default" onSubmit={ (e) => e.preventDefault() }>
			<p>Separate <em>sets</em> with <strong>new lines</strong>. Separate <em>items</em> with <strong>commas</strong>.</p>
			<div className="form-group">
				<textarea
					id="input"
					className="form-control"
					value={ input }
					onChange={ (e) => updateInput(e.target.value) }
				/>
			</div>
			<div className="form-group">
				<div className="pull-left">
					<button type="button" className="btn btn-link" onClick={ () => loadExample(EXAMPLE_SIMPLE) }>Simple example</button>
					<button type="button" className="btn btn-link" onClick={ () => loadExample(EXAMPLE_COMPLEX) }>Example testing scenarios</button>
				</div>
				<div className="pull-right">
					<button type="submit" className="btn btn-primary" onClick={ () => getCombinations(input) }>Get combinations</button>
				</div>
			</div>
		</form>

		<hr />

		<Output lines={ lines } />

	</div>
);
