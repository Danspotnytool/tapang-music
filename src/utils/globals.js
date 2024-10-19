
export default globals = {};



export const size = 15;



export const colors = {
	primary: '#FF1952',
	text: '#FFFFFF',
	background: '#000000'
};
globals.colors = colors;



export const gap = {
	small: size * 0.5,
	medium: size,
	large: size * 2
};
globals.gap = gap;



export const padding = {
	small: size * 0.5,
	medium: size,
	large: size * 2
};
globals.padding = padding;



export const borderRadius = {
	small: size * 0.5,
	medium: (size / 3) * 2,
	large: (size / 3) * 4
};
globals.borderRadius = borderRadius;



export const borderWidths = {
	thin: 1,
	medium: 2,
	thick: 3
};
globals.borderWidths = borderWidths;



export const fontSizes = {
	small: (size / 3) * 2,
	medium: size,
	large: size * 2,

	h1: size * 3,
	h2: size * 2.75,
	h3: size * 2.5,
	h4: size * 2.25,
	h5: size * 1.75,
	h6: size * 1.5
};
globals.fontSizes = fontSizes;



export const fontWeights = {
	thin: '100',
	regular: '400',
	bold: '700'
};
globals.fontWeights = fontWeights;