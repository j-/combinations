import React from 'react';
import ExampleButtons from '../example-buttons/container';

export default ({
	// Props
	input,
	canGetCombinations,
	// Actions
	updateInput,
	loadExample,
	getCombinations,
	clear,
}) => (
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
				<button
					type="button"
					className="btn btn-default"
					onClick={ clear }
				>
					Clear
				</button>

				{ ' ' }

				<button
					type="submit"
					className="btn btn-primary"
					onClick={ () => getCombinations(input) }
					disabled={ !canGetCombinations }
				>
					Get combinations
				</button>
			</div>
		</div>
	</form>
);
