import React, { PropTypes } from 'react';
import ExampleButtons from '../example-buttons';

const cancel = (e) => e.preventDefault();

const FormControls = ({
	// Props
	input,
	canGetCombinations,
	// Actions
	updateInput,
	getCombinations,
	clear,
}) => (
	<form className="card card-body mt-5 mb-5" onSubmit={ cancel }>
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
			<div className="float-left">
				<ExampleButtons />
			</div>
			<div className="float-right">
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

FormControls.propTypes = {
	input: PropTypes.string,
	canGetCombinations: PropTypes.bool,
	updateInput: PropTypes.func.isRequired,
	getCombinations: PropTypes.func.isRequired,
	clear: PropTypes.func.isRequired,
};

export default FormControls;
