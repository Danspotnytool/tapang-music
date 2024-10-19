
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
	a = 0,
	b = 0,
	c = 0,
	d = 0
) => {
	// If only one argument is passed, apply it to all sides
	if (a && !(b || c || d)) {
		return {
			paddingTop: a,
			paddingRight: a,
			paddingBottom: a,
			paddingLeft: a
		};
	};

	// If two arguments are passed, apply the first to the top and bottom, and the second to the left and right
	if (a && b && !(c || d)) {
		return {
			paddingTop: a,
			paddingRight: b,
			paddingBottom: a,
			paddingLeft: b
		};
	};

	// If three arguments are passed, apply the first to the top, the second to the left and right, and the third to the bottom
	if (a && b && c && !d) {
		return {
			paddingTop: a,
			paddingRight: b,
			paddingBottom: c,
			paddingLeft: b
		};
	};

	// If all four arguments are passed, apply them to the top, right, bottom, and left
	return {
		paddingTop: a,
		paddingRight: b,
		paddingBottom: c,
		paddingLeft: d
	};
};