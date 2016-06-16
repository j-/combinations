import FormControls from './';
import { connect } from 'react-redux';
import { getInput } from '../../reducers';
import * as actions from '../../reducers/actions';

const mapStateToProps = (state) => ({
	input: getInput(state),
});

export default connect(
	mapStateToProps,
	actions
)(FormControls);
