import React from 'react';
import Output from '../output';
import PageHeader from '../page-header';
import FormControls from '../form-controls';

const App = () => (
	<div className="container mt-5 mb-5">
		<PageHeader />
		<FormControls />
		<Output />
	</div>
);

export default App;
