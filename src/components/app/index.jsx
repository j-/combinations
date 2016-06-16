import React from 'react';
import Output from '../output/container';
import PageHeader from '../page-header';
import FormControls from '../form-controls/container';

export default () => (
	<div className="container">
		<PageHeader />
		<FormControls />

		<hr />

		<Output />
	</div>
);
