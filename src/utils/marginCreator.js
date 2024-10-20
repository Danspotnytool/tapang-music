
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
   // If a is falsy but is not 0, set it to undefined
   a = a !== 0 && !a ? undefined : a;
   b = b !== 0 && !b ? undefined : b;
   c = c !== 0 && !c ? undefined : c;
   d = d !== 0 && !d ? undefined : d;
   // If all are undefined
   if (a===undefined && b===undefined && c===undefined && d===undefined) {
	   return {
		   marginTop: 0,
		   marginRight: 0,
		   marginBottom: 0,
		   marginLeft: 0
	   };
   };
   // If only a is filled
   if (a && b===undefined && c===undefined && d===undefined) {
	   return {
		   marginTop: a,
		   marginRight: a,
		   marginBottom: a,
		   marginLeft: a
	   };
   };
   // If only a and b is filled
   if (a && b && c===undefined && d===undefined) {
	   return {
		   marginTop: a,
		   marginRight: b,
		   marginBottom: a,
		   marginLeft: b
	   };
   };
   // If all are filled except for d
   if (a && b && c && d===undefined) {
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