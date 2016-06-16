import ExampleButton from './example-button';
import { connect } from 'react-redux';
import { loadExample } from '../../reducers/actions';

const ExampleButtonContainer = connect(
	null,
	{ loadExample }
)(ExampleButton);

export default ExampleButtonContainer;
