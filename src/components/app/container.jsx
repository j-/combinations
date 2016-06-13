import App from './';
import { connect } from 'react-redux';
import * as actions from '../../reducers/actions';

const mapStateToProps = ({ input, lines }) => ({
	input,
	lines,
});

export default connect(
	mapStateToProps,
	actions
)(App);
