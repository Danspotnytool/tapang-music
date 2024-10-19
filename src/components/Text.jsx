import { Text as DefaultText } from 'react-native';
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
 * 		children: React.Component
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

				...paddingCreator(
					padding.small,
					padding.medium
				),

				fontSize: fontSizes.medium,
				fontWeight: fontWeights.normal,

				lineHeight: fontSizes.medium,
				...props.style
			}}
		>
			{fontsLoaded ? props.children : ' '}
		</DefaultText>
	);
};
export default Text;
export { Text };

/**
 * @type {React.FC<{
 * 		children: React.Component,
 * 		level: 1 | 2 | 3 | 4 | 5 | 6
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
				color: colors.text,

				fontSize: props.level === 1 ? fontSizes.h1 :
					props.level === 2 ? fontSizes.h2 :
						props.level === 3 ? fontSizes.h3 :
							props.level === 4 ? fontSizes.h4 :
								props.level === 5 ? fontSizes.h5 :
									props.level === 6 ? fontSizes.h6 : fontSizes.h1,
				fontWeight: fontWeights.bold,

				lineHeight: props.level === 1 ? fontSizes.h1 :
					props.level === 2 ? fontSizes.h2 :
						props.level === 3 ? fontSizes.h3 :
							props.level === 4 ? fontSizes.h4 :
								props.level === 5 ? fontSizes.h5 :
									props.level === 6 ? fontSizes.h6 : fontSizes.h1,
				...props.style
			}}
		>
			{fontsLoaded ? props.children : ' '}
		</DefaultText>
	);
};
export { Heading };