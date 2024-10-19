
/**
 * @type {(
* 		a: Number,
* 		b: Number,
* 		c: Number,
* 		d: Number
* ) => {
* 		marginTop: Number,
* 		marginRight: Number,
* 		marginBottom: Number,
* 		marginLeft: Number
* }}
*/
export default marginCreator = (
	a,
	b,
	c,
	d
) => {
	a = a !== 0 
	// If only a is filled
	if (a && !(b || c || d)) {
		return {
			marginTop: a,
			marginRight: a,
			marginBottom: a,
			marginLeft: a
		};
	};
	// If only a and b is filled
	if (a && b && !(c || d)) {
		return {
			marginTop: a,
			marginRight: b,
			marginBottom: a,
			marginLeft: b
		};
	};
	// If all are filled except for d
	if (a && b && c && !d) {
		return {
			marginTop: a,
			marginRight: b,
			marginBottom: c,
			marginLeft: b
		};
	};
	// If all are filled
	return {
		marginTop: a,
		marginRight: b,
		marginBottom: c,
		marginLeft: d
	};
};