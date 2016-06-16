import ExampleButtons from './';
import { connect } from 'react-redux';
import { loadExample } from '../../reducers/actions';

export default connect(
	null,
	{ loadExample }
)(ExampleButtons);
