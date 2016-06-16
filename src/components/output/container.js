import Output from './';
import { connect } from 'react-redux';
import { getLines } from '../../reducers';

const mapStateToProps = (state) => ({
	lines: getLines(state),
});

export default connect(
	mapStateToProps
)(Output);
