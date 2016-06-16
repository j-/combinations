import FormControls from './form-controls';
import { connect } from 'react-redux';
import { getInput } from '../../reducers';
import * as actions from '../../reducers/actions';

const mapStateToProps = (state) => {
	const input = getInput(state);
	return {
		input,
		canGetCombinations: input.trim() !== '',
	};
};

const FormControlsContainer = connect(
	mapStateToProps,
	actions
)(FormControls);

export default FormControlsContainer;
