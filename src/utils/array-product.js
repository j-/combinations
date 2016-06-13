import arrayConcat from './array-concat';

export default function arrayProduct (sets) {
	return sets.reduce((left, right) => {
		return left.map((a) => {
			return right.map((b) => {
				return arrayConcat(a, [b]);
			});
		}).reduce(arrayConcat);
	}, [[]]);
}
