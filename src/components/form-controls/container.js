import FormControls from './';
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

export default connect(
	mapStateToProps,
	actions
)(FormControls);
