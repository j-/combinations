import React from 'react';
import Output from '../output';
import PageHeader from '../page-header';
import FormControls from '../form-controls';

const App = () => (
	<div className="container">
		<PageHeader />
		<FormControls />

		<hr />

		<Output />
	</div>
);

export default App;
