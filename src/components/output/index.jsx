import React, { Component, PropTypes } from 'react';
import arrayProduct from '../../utils/array-product';

const tableClassList = 'table table-condensed table-bordered table-highlight';

export default class Output extends Component {
	static propTypes = {
		lines: PropTypes.array.isRequired,
	}

	render () {
		const { lines } = this.props;
		const values = lines.map(line => line.values);
		const labels = lines.map(line => line.label);
		const combinations = arrayProduct(values);
		const hasLabels = lines.some(line => line.label);
		const hasValues = combinations.length > 0;

		const thead = hasLabels && <thead>
			<tr>
				{ labels.map((label, i) =>
					<th key={ i }>{ label }</th>
				) }
			</tr>
		</thead>;

		const tbody = hasValues && <tbody>
			{ combinations.map((values, i) =>
				<tr key={ i }>
					{ values.map((value, i) =>
						<td key={ i }>{ value }</td>
					) }
				</tr>
			) }
		</tbody>;

		const table = hasValues && <table className={ tableClassList }>
			{ thead }
			{ tbody }
		</table>;

		return table;
	}
}
