export default function arrayProduct (sets) {
	return sets.reduce((a, b) =>
		// Take one value from `a` and another from `b`
		a.map(a => b.map(b => a.concat(b)))
			// Flatten array
			.reduce((a, b) => a.concat(b)),
		// Initial state
		[[]]
	);
}
