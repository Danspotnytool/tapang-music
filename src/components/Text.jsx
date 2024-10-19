import { Text as DefaultText, StyleSheet, TextStyle } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
	useFonts,
	Poppins_100Thin,
	Poppins_400Regular,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import {
	colors,
	padding,
	fontSizes,
	borderRadius,
	borderWidths,
	fontWeights
} from '../utils/globals';
import paddingCreator from '../utils/paddingCreator';



/**
 * @type {React.FC<{
 * 		children: React.Component,
 * 		style: StyleProp<TextStyle>,
 * 		weight: 'thin' | 'regular' | 'bold'
 * }>}
 */
const Text = (props) => {
	let [fontsLoaded] = useFonts({
		Poppins_100Thin,
		Poppins_400Regular,
		Poppins_700Bold,
	});
	return (
		<DefaultText
			style={{
				color: colors.text,

				...paddingCreator(0),

				fontSize: fontSizes.medium,
				fontWeight: props.weight ?
					props.weight === 'thin' ? fontWeights.thin :
						props.weight === 'regular' ? fontWeights.regular :
							props.weight === 'bold' ? fontWeights.bold : fontWeights.regular
					: null,
				fontFamily: fontsLoaded ? props.weight ?
					props.weight === 'thin' ? 'Poppins_100Thin' :
						props.weight === 'regular' ? 'Poppins_400Regular' :
							props.weight === 'bold' ? 'Poppins_700Bold' : 'Poppins_400Regular'
					: null : null,

				lineHeight: fontSizes.medium,
				...props.style
			}}
		>
			{props.children || ' '}
		</DefaultText>
	);
};
export default Text;
export { Text };

/**
 * @type {React.FC<{
 * 		children: React.Component,
 * 		level: 1 | 2 | 3 | 4 | 5 | 6,
* 		style: StyleProp<TextStyle>
 * }>}
 */
const Heading = (props) => {
	let [fontsLoaded] = useFonts({
		Poppins_100Thin,
		Poppins_400Regular,
		Poppins_700Bold,
	});
	return (
		<DefaultText
			style={{
				...paddingCreator(0),

				color: colors.text,

				fontSize: props.level === 1 ? fontSizes.h1 :
					props.level === 2 ? fontSizes.h2 :
						props.level === 3 ? fontSizes.h3 :
							props.level === 4 ? fontSizes.h4 :
								props.level === 5 ? fontSizes.h5 :
									props.level === 6 ? fontSizes.h6 : fontSizes.h1,
				fontWeight: fontWeights.bold,
				fontFamily: fontsLoaded ? 'Poppins_700Bold' : null,

				lineHeight: props.level === 1 ? fontSizes.h1 :
					props.level === 2 ? fontSizes.h2 :
						props.level === 3 ? fontSizes.h3 :
							props.level === 4 ? fontSizes.h4 :
								props.level === 5 ? fontSizes.h5 :
									props.level === 6 ? fontSizes.h6 : fontSizes.h1,
				...props.style
			}}
		>
			{props.children || ' '}
		</DefaultText>
	);
};
export { Heading };