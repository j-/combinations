import React from 'react';
import ExampleButtons from '../example-buttons/container';

export default ({ input, updateInput, loadExample, getCombinations }) => (
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
				<ExampleButtons />
			</div>
			<div className="pull-right">
				<button type="submit" className="btn btn-primary" onClick={ () => getCombinations(input) }>Get combinations</button>
			</div>
		</div>
	</form>
);
