import React, { PropTypes } from 'react';
import arrayProduct from '../../utils/array-product';

const tableClassList = 'table table-sm table-bordered table-hover mt-5 mb-5';

const Output = ({ lines }) => {
	const values = lines.map(line => line.values);
	const combinations = arrayProduct(values);
	const hasValues = combinations.length > 0;

	if (!hasValues) {
		return null;
	}

	const labels = lines.map(line => line.label);
	const hasLabels = lines.some(line => line.label);

	const thead = hasLabels && <thead>
		<tr>
			{ labels.map((label, i) =>
				<th key={ i }>{ label }</th>
			) }
		</tr>
	</thead>;

	const tbody = <tbody>
		{ combinations.map((values, i) =>
			<tr key={ i }>
				{ values.map((value, i) =>
					<td key={ i }>{ value }</td>
				) }
			</tr>
		) }
	</tbody>;

	const table = <table className={ tableClassList }>
		{ thead }
		{ tbody }
	</table>;

	return table;
}

Output.propTypes = {
	lines: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			values: PropTypes.arrayOf(PropTypes.string).isRequired,
		})
	).isRequired,
};

export default Output;
