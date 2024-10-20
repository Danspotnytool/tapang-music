
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
	// If a is falsy but is not 0, set it to undefined
	a = a !== 0 && !a ? undefined : a;
	b = b !== 0 && !b ? undefined : b;
	c = c !== 0 && !c ? undefined : c;
	d = d !== 0 && !d ? undefined : d;
	// If all are undefined
	if (a===undefined && b===undefined && c===undefined && d===undefined) {
		return {
			paddingTop: 0,
			paddingRight: 0,
			paddingBottom: 0,
			paddingLeft: 0
		};
	};
	// If only a is filled
	if (a && b===undefined && c===undefined && d===undefined) {
		return {
			paddingTop: a,
			paddingRight: a,
			paddingBottom: a,
			paddingLeft: a
		};
	};
	// If only a and b is filled
	if (a && b && c===undefined && d===undefined) {
		return {
			paddingTop: a,
			paddingRight: b,
			paddingBottom: a,
			paddingLeft: b
		};
	};
	// If all are filled except for d
	if (a && b && c && d===undefined) {
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