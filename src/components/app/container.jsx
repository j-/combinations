import App from './';
import { connect } from 'react-redux';
import * as actions from '../../reducers/actions';
import { getInput, getLines } from '../../reducers';

const mapStateToProps = (state) => ({
	input: getInput(state),
	lines: getLines(state),
});

export default connect(
	mapStateToProps,
	actions
)(App);
