import React from 'react';

const HEADER_URL = 'https://github.com/j-/combinations';
const HEADER_TITLE = 'Check out the source on GitHub';

const PageHeader = () => (
	<div className="page-header">
		<h1 className="title">
			<a href={ HEADER_URL } title={ HEADER_TITLE }>
				Combinations
			</a>
		</h1>
	</div>
);

export default PageHeader;
