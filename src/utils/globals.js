
export default globals = {};



export const rem = 20;



export const colors = {
	primary: '#FF1952',
	secondary: '#221A1C',
	text: '#FFFFFF',
	background: '#000000'
};
globals.colors = colors;



export const gap = {
	small: rem / 3,
	medium: rem,
	large: rem * 2
};
globals.gap = gap;



export const padding = {
	small: rem * 0.5,
	medium: rem,
	large: rem * 2
};
globals.padding = padding;



export const borderRadius = {
	small: rem * 0.5,
	medium: (rem / 3) * 2,
	large: (rem / 3) * 4
};
globals.borderRadius = borderRadius;



export const borderWidths = {
	thin: 1,
	medium: 2,
	thick: 3
};
globals.borderWidths = borderWidths;



export const fontSizes = {
	small: (rem / 3) * 2,
	medium: rem,
	large: rem * 2,

	h1: ((rem / 3) * 2) * 3,
	h2: ((rem / 3) * 2) * 2.5,
	h3: ((rem / 3) * 2) * 2,
	h4: ((rem / 3) * 2) * 1.625,
	h5: ((rem / 3) * 2) * 1.25,
	h6: ((rem / 3) * 2)
};
globals.fontSizes = fontSizes;



export const fontWeights = {
	thin: '100',
	regular: '400',
	bold: '700'
};
globals.fontWeights = fontWeights;