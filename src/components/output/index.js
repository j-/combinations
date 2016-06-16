import Output from './output';
import { connect } from 'react-redux';
import { getLines } from '../../reducers';

const mapStateToProps = (state) => ({
	lines: getLines(state),
});

const OutputContainer = connect(
	mapStateToProps
)(Output);

export default OutputContainer;
