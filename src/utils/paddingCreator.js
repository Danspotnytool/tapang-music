
/**
 * @type {(
 * 		a: Number,
 * 		b: Number,
 * 		c: Number,
 * 		d: Number
 * ) => {
 * 		paddingTop: Number,
 * 		paddingRight: Number,
 * 		paddingBottom: Number,
 * 		paddingLeft: Number
 * }}
 */
export default paddingCreator = (
	a,
	b,
	c,
	d
) => {
	// If only a is filled
	if (a && !(b || c || d)) {
		return {
			paddingTop: a,
			paddingRight: a,
			paddingBottom: a,
			paddingLeft: a
		};
	};
	// If only a and b is filled
	if (a && b && !(c || d)) {
		return {
			paddingTop: a,
			paddingRight: b,
			paddingBottom: a,
			paddingLeft: b
		};
	};
	// If all are filled except for d
	if (a && b && c && !d) {
		return {
			paddingTop: a,
			paddingRight: b,
			paddingBottom: c,
			paddingLeft: b
		};
	};
	// If all are filled
	return {
		paddingTop: a,
		paddingRight: b,
		paddingBottom: c,
		paddingLeft: d
	};
};